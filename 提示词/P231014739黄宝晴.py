import requests
from bs4 import BeautifulSoup
import time

# 设置请求头，模拟浏览器访问
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

url = 'https://www.xbmu.edu.cn/'

try:
    # 添加请求头和超时设置
    r = requests.get(url, headers=headers, timeout=10)
    r.raise_for_status()  # 如果状态码不是200，将引发异常
    r.encoding = r.apparent_encoding
    
    soup = BeautifulSoup(r.text, 'html.parser')
    print('--------------------------------------------------')
    
    # 尝试多个可能的选择器
    items = soup.find_all('li', class_="sub-item il-l")
    if not items:
        # 如果没有找到，尝试其他常见的导航元素
        items = soup.find_all(['a', 'li'], class_=lambda x: x and ('nav' in x.lower() or 'menu' in x.lower()))
    
    if items:
        print(f"找到 {len(items)} 个元素：")
        for item in items:
            print(item.get_text(strip=True))
    else:
        print("未找到匹配的元素，网站结构可能已更改")
    
except requests.RequestException as e:
    print(f"请求发生错误: {e}")
except Exception as e:
    print(f"发生其他错误: {e}")