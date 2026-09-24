import { useEnv } from "../../lib/env";

export function BaseUrl() {
	const { config } = useEnv();
	return <code>{config.baseUrl}</code>;
}
