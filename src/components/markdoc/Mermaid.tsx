import React, { useEffect, useMemo, useRef, useState } from 'react';
import mermaid from 'mermaid';

type MermaidConfig = NonNullable<Parameters<typeof mermaid.initialize>[0]>;

type MermaidProps = {
  code: string;
  /**
   * Thème Mermaid: 'default' | 'dark' | 'neutral' | custom via mermaid.initialize
   */
  theme?: 'default' | 'dark' | 'neutral';
  /**
   * Permet de passer une config Mermaid avancée.
   * Exemple: { securityLevel: 'strict', themeVariables: {...} }
   */
  config?: MermaidConfig;
  /**
   * Si true, utilise un iframe sandbox pour un rendu isolé (bloque JS inclus dans le diagramme).
   * Utile pour contenu non fiable.
   */
  sandbox?: boolean;
  /**
   * Id de diagramme (optionnel), utile pour re-rendu stable.
   */
  diagramId?: string;
};

const DEFAULT_CONFIG: MermaidConfig = {
  startOnLoad: false,
  securityLevel: 'strict', // bon par défaut: pas d'exécution JS arbitraire dans les labels
  theme: 'default',
};

export const Mermaid: React.FC<MermaidProps> = ({
  code,
  theme = 'default',
  config,
  sandbox = false,
  diagramId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  // Config finale mémorisée pour éviter réinitialisations inutiles
  const finalConfig = useMemo<MermaidConfig>(() => {
    return {
      ...DEFAULT_CONFIG,
      ...(config || {}),
      theme,
    };
  }, [config, theme]);

  useEffect(() => {
    // Initialiser Mermaid à chaque changement de config
    mermaid.initialize(finalConfig);
  }, [finalConfig]);

  useEffect(() => {
    setError(null);

    if (sandbox) {
      // Rendu sandboxé via iframe pour contenu non fiable
      const container = containerRef.current;
      if (!container) return;

      // Nettoyer
      container.innerHTML = '';

      const iframe = document.createElement('iframe');
      iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin'); // Allow scripts and same-origin for Mermaid rendering
      iframe.style.width = '100%';
      iframe.style.border = '0';

      container.appendChild(iframe);

      const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>body{margin:0;padding:0}</style>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
  </head>
  <body>
    <div id="root">
      <div class="mermaid">${escapeHtml(code)}</div>
    </div>
    <script>
      mermaid.initialize(${JSON.stringify(finalConfig)});
      mermaid.run();
      // Ajuster la hauteur automatique
      setTimeout(() => {
        const svg = document.querySelector('svg');
        if (svg) {
          const rect = svg.getBoundingClientRect();
          document.body.style.height = rect.height + 'px';
        }
      }, 100);
    </script>
  </body>
</html>
      `.trim();

      const doc = iframe.contentDocument;
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
      }

      return;
    }

    // Rendu direct (non sandbox) dans le DOM React
    const el = containerRef.current;
    if (!el) return;

    // Nettoyage
    el.innerHTML = '';

    const uniqueId =
      diagramId || `mermaid-${Math.random().toString(36).slice(2, 9)}`;

    // Mermaid.render retourne du SVG string à insérer
    // Utiliser render plutôt que run pour un contrôle fin
    mermaid
      .render(uniqueId, code)
      .then(({ svg }) => {
        el.innerHTML = svg;
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : String(e));
      });
  }, [code, sandbox, finalConfig, diagramId]);

  return (
    <div className="p-8">
      {error ? (
        <pre
          style={{
            color: '#b00020',
            background: '#fff1f0',
            padding: '8px',
            borderRadius: 6,
            overflowX: 'auto',
          }}
        >
          Mermaid error: {error}
        </pre>
      ) : (
        <div ref={containerRef} />
      )}
    </div>
  );
};

// Petite fonction d’échappement pour éviter injection HTML lors de l’iframe sandbox
function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export default Mermaid;
