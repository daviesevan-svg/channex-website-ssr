import re, glob, os

content = open('app/data/integrations.ts').read()
cdn_logos = set(re.findall(r'raw\.githubusercontent\.com/[^"]+/lovable-uploads/([^"]+)', content))

all_refs = set()
files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('app/**/*.ts', recursive=True) + ['index.html']
for f in files:
    try:
        c = open(f).read()
        matches = re.findall(r'/lovable-uploads/([^"\'>\s,)]+)', c)
        for m in matches:
            all_refs.add(m)
    except:
        pass

local_refs = all_refs - cdn_logos
total_size = 0
for f in local_refs:
    path = f'public/lovable-uploads/{f}'
    if os.path.exists(path):
        size = os.path.getsize(path)
        total_size += size
    else:
        print(f'MISSING: {f}')

print(f'Total size of locally-referenced files: {total_size/1024/1024:.1f} MB')
print(f'Total files in lovable-uploads: {len(os.listdir("public/lovable-uploads"))}')
total_all = sum(os.path.getsize(f"public/lovable-uploads/{f}") for f in os.listdir("public/lovable-uploads") if os.path.isfile(f"public/lovable-uploads/{f}"))
print(f'Total size of all lovable-uploads: {total_all/1024/1024:.1f} MB')
cdn_size = total_all - total_size
print(f'Size of CDN-only files (can be removed from dist): {cdn_size/1024/1024:.1f} MB')
