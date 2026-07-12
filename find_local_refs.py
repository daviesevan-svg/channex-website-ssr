import re, glob

# Get all CDN logo filenames (these are served from GitHub, don't need to be in dist)
content = open('app/data/integrations.ts').read()
cdn_logos = set(re.findall(r'raw\.githubusercontent\.com/[^"]+/lovable-uploads/([^"]+)', content))
print(f'Integration logos (via CDN): {len(cdn_logos)}')

# Get all /lovable-uploads/ references from source files
all_refs = set()
files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('app/**/*.ts', recursive=True) + ['index.html']
for f in files:
    try:
        c = open(f).read()
        # Simple: find all /lovable-uploads/FILENAME patterns
        matches = re.findall(r'/lovable-uploads/([^"\'>\s,)]+)', c)
        for m in matches:
            all_refs.add(m)
    except Exception as e:
        pass

print(f'All lovable-uploads references: {len(all_refs)}')

# Local refs = all refs that are NOT in the CDN logos list
local_refs = all_refs - cdn_logos
print(f'Locally referenced files (must stay in dist): {len(local_refs)}')
for f in sorted(local_refs):
    print(f'  {f}')

print()
print(f'CDN-only files (can be removed from dist): {len(cdn_logos)}')
