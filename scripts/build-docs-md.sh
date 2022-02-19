output="docs/out/api.md"
api_file="api/definition/openapi.yaml"

widdershins --resolve --useBodyName --search  ${api_file} -o ${output}