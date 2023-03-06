#!/bin/bash
## Uses `esbuild` to compile the scripts in `client`
## Requires node, tsc, and esbuild available on the path

set -euo pipefail
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $dir/..

esbuild src/client.ts --outdir=www/assets --bundle --minify --sourcemap
