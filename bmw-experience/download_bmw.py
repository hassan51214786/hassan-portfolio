import urllib.request
import json
import os

dir_path = r"C:\Users\mehas\.gemini\antigravity\scratch\portfolio-workspace\bmw-experience\public\bmw-images"
os.makedirs(dir_path, exist_ok=True)

pages = {
    'm4': 'BMW_M4',
    'i8': 'BMW_i8',
    'x5m': 'BMW_X5_M',
    '8series': 'BMW_8_Series',
    'i4': 'BMW_i4',
    'm3': 'BMW_M3'
}

for name, page in pages.items():
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles={page}&pithumbsize=1200&format=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        pages_dict = data['query']['pages']
        page_id = list(pages_dict.keys())[0]
        if 'thumbnail' in pages_dict[page_id]:
            img_url = pages_dict[page_id]['thumbnail']['source']
            print(f"Downloading {name} from {img_url}")
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(img_req) as img_res:
                with open(os.path.join(dir_path, f"{name}.jpg"), 'wb') as f:
                    f.write(img_res.read())
        else:
            print(f"No thumbnail found for {name}")
