respec="docs/config/respec.json"
respec_css_tag='<link rel="stylesheet" href="../config/respecStyle.css">'
abstract="docs/config/abstract.md"
sotd="docs/config/sotd.md"

output="docs/out/api.html"
api_file="api/definition/openapi.yaml"

widdershins --resolve true --useBodyName true --search true --language_tabs "javascript:JavaScript" --respec ${respec} --abstract ${abstract} --sotd ${sotd} ${api_file} -o ${output}
echo ${respec_css_tag} >> ${output}