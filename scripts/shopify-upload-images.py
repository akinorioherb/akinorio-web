#!/usr/bin/env python3
"""
Shopify 商品画像アップロードスクリプト
使い方: python3 scripts/shopify-upload-images.py
"""

import base64, json, urllib.request, urllib.error, time, os, sys
from pathlib import Path

TOKEN = os.environ.get("SHOPIFY_ADMIN_API_TOKEN")
DOMAIN = os.environ.get("SHOPIFY_STORE_DOMAIN", "akinorio-official.myshopify.com")

if not TOKEN:
    print("エラー: SHOPIFY_ADMIN_API_TOKEN 環境変数が設定されていません")
    print("実行例: SHOPIFY_ADMIN_API_TOKEN=shpat_xxx python3 scripts/shopify-upload-images.py")
    sys.exit(1)
IMG_DIR = Path(__file__).parent.parent / "public/images/products-bg-hik"

# 商品ID → 画像ファイル名（Shopify管理画面のIDを更新する際はここを修正）
PRODUCTS = [
    (15323776909683, "mitokondria.png",   "ミトコンドリアのちから"),
    (15323776942451, "herb.png",          "ハーブのちから"),
    (15323776975219, "cleansing.png",     "クリアクリスタルクレンジング"),
    (15323777007987, "kihada.png",        "輝肌（キハダ）"),
    (15323777040755, "kinnoito.png",      "金の糸クリーム（クリアクリスタルバーム）"),
    (15323777073523, "serum.png",         "クリアクリスタルセラム"),
    (15323777106291, "uv.png",            "クリアクリスタルスキンベースUV"),
    (15323777139059, "starterset.png",    "輝魔女セット（基本の引き算セット）"),
    (15323777171827, "kimajyoset.png",    "輝魔女セット（極上のエイジングケア）"),
    (15323777204595, "allseries_fine.png","輝魔女プレミアム"),
    (15323777237363, "shampoo.png",       "Perfume（美容液混合シャンプー）"),
]

def get_existing_images(product_id: int) -> list:
    url = f"https://{DOMAIN}/admin/api/2024-01/products/{product_id}/images.json"
    req = urllib.request.Request(url, headers={"X-Shopify-Access-Token": TOKEN})
    with urllib.request.urlopen(req) as res:
        return json.loads(res.read())["images"]

def delete_image(product_id: int, image_id: int):
    url = f"https://{DOMAIN}/admin/api/2024-01/products/{product_id}/images/{image_id}.json"
    req = urllib.request.Request(url, headers={"X-Shopify-Access-Token": TOKEN}, method="DELETE")
    urllib.request.urlopen(req)

def upload_image(product_id: int, filename: str, name: str, replace: bool = True):
    path = IMG_DIR / filename
    if not path.exists():
        print(f"⚠️  画像ファイルが見つかりません: {path}")
        return False

    # 既存画像を削除してから再アップロード（replace=True時）
    if replace:
        existing = get_existing_images(product_id)
        for img in existing:
            delete_image(product_id, img["id"])

    with open(path, "rb") as f:
        encoded = base64.b64encode(f.read()).decode("utf-8")

    payload = json.dumps({
        "image": {"attachment": encoded, "filename": filename, "alt": name}
    }).encode("utf-8")

    url = f"https://{DOMAIN}/admin/api/2024-01/products/{product_id}/images.json"
    req = urllib.request.Request(
        url, data=payload,
        headers={"X-Shopify-Access-Token": TOKEN, "Content-Type": "application/json"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as res:
            result = json.loads(res.read())
            print(f"✅ {name}")
            return True
    except urllib.error.HTTPError as e:
        print(f"❌ {name}: {e.code} - {e.read().decode()[:120]}")
        return False

if __name__ == "__main__":
    # 引数で特定商品名を指定した場合はその商品のみ更新
    target = sys.argv[1] if len(sys.argv) > 1 else None

    print(f"Shopify 商品画像アップロード開始\nストア: {DOMAIN}\n")
    success, failed = 0, 0

    for pid, fname, name in PRODUCTS:
        if target and target not in name:
            continue
        result = upload_image(pid, fname, name)
        if result:
            success += 1
        else:
            failed += 1
        time.sleep(0.5)

    print(f"\n完了: ✅ {success}件成功 / ❌ {failed}件失敗")
