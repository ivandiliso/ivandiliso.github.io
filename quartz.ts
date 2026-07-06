import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // Files first, folders second
    if (a.isFolder && !b.isFolder) return 1
    if (!a.isFolder && b.isFolder) return -1

    // Then alphabetical
    return a.displayName.localeCompare(b.displayName)
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
