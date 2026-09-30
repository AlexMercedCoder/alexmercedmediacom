import { readFileSync } from 'fs';
import path from 'path';

/**
 * Reads the generated network/ folder (written by
 * alexmercedcom/scripts/build-network-shared.mjs). Never copy its contents
 * into templates; regenerate the folder instead.
 */

export interface NetworkLink {
    title: string;
    url: string;
}

export interface NetworkCtaLink {
    label: string;
    url: string;
    event: string;
}

export interface NetworkData {
    twitterSite: string;
    footer: {
        groups: { title: string; links: NetworkLink[] }[];
        allSitesUrl: string;
        allSitesLabel: string;
    };
    cta: { heading: string; links: NetworkCtaLink[] } | null;
}

const networkDir = path.join(process.cwd(), 'network');

export const network: NetworkData = JSON.parse(
    readFileSync(path.join(networkDir, 'network.json'), 'utf8')
);

export interface HeadScript {
    attrs: Record<string, string | boolean>;
    content: string;
}

/**
 * Splits network-head.html into its <script> tags so each one can be
 * rendered as a real <script> element in <head>. Rendered this way the
 * async gtag loader and the inline config both execute on page load.
 */
export function getNetworkHeadScripts(): HeadScript[] {
    const html = readFileSync(path.join(networkDir, 'network-head.html'), 'utf8');
    const scripts: HeadScript[] = [];
    const tagRe = /<script([^>]*)>([\s\S]*?)<\/script>/g;
    const attrRe = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*"([^"]*)")?/g;
    let m: RegExpExecArray | null;
    while ((m = tagRe.exec(html))) {
        const attrs: Record<string, string | boolean> = {};
        let a: RegExpExecArray | null;
        while ((a = attrRe.exec(m[1]))) {
            attrs[a[1]] = a[2] === undefined ? true : a[2];
        }
        scripts.push({ attrs, content: m[2] });
    }
    return scripts;
}
