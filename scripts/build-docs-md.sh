output="docs/out/api.md"
api_file="api/config/openapi.yaml"

widdershins --resolve --useBodyName --search  ${api_file} -o ${output}