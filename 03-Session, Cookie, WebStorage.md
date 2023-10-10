# sessionとcookieの違いについてまとめる＋Webサイトにログインするときの処理を説明する＋local storage, session storage, cookieの違い

# Cookieとは

cookieとはHTTPを拡張し、webサーバとwebブラウザ間で情報を共有できるようにした機能である。
HTTPリクエストを受け取った際、サーバはHTTPレスポンスヘッダーでSet-Cookieヘッダーを送信する。通常Cookieはブラウザーに保存され、Cookieは同じサーバに対して再度行われるHTTPリクエストとともにHTTPリクエストヘッダー中のCookieヘッダーの中で送信される。

# Sessionとは

sessionとは、通信における一連の工程・開始から終了までのことを指す。例えばログイン→ログアウトするまでの一連がある。
sessionを利用すると、サーバから自動的にsession IDと呼ばれる一意のIDが発行される。このIDはsessionにおけるデータと紐づけを行うとともに、cookieに格納されHTTPリクエスト・レスポンスを行う。

# CookieとSessionの違い

cookieとはHTTP通信で情報を共有できるようにした機能のことであり、よくあるユーザデータなど自体を格納するものではない。なぜならばcookieはそこまで大きなデータを格納するように設計されていないのもあるが、比較的簡単に中身を確認可能なためセキュリティ面でも信用ならない。
この解決策としてsessionが用いられる。サーバ側でsession IDとデータを紐づけし管理しておき、cookieにsession IDを格納、HTTP通信を行う際にsession IDを付加することにより、リクエストのsession IDとサーバ側のsession IDを参照し、整合性・セキュリティ性を取ることができる。

# Webサイトにログインするときの処理は

1. クライアントがサーバにログイン画面のリクエストを送る。
2. サーバはログイン画面のデータと、session IDを返却する
3. クライアント側はログインに必要なデータとsession IDを送る
4. サーバはsession IDに紐づいているデータを確認し、整合性が取れるのであればログイン完了のデータを返却する。
一度session IDの整合性を取れた場合、HTTPレスポンスヘッダについてはsession終了までcookieにsession IDが含まれることはなく、HTTPリクエストヘッダのみ含まれることとなる。

# Local Storageとは

ブラウザ上にデータを保存できる仕組みのことである。ブラウザでログイン情報の保存ができるが、これにはLocal Storageが使用されている。
Local Storageの確認は、ブラウザのdev toolからApplication→Local storageで確認可能である。

## Local Storage と Cookieの違い

Local StorageとCookieの違いには保存期間と保存容量の差がある。
Cookieは保存期間が制限されるのに対し、Local Storageは半永久的に保存できる。
保存容量についても、Local Storageが5-10MBに対し、Cookieは4KBである。

# Session Storageとは

ブラウザ上にデータを保存できる仕組みのことである。Local Storageも同様な機能だが、Session Storageはウィンドウを閉じたり、同一のページに長時間滞在している場合、sessionが終了し、Session Storageに保存されているデータは破棄される。
Session Storageの確認は、ブラウザのdev toolからApplication→Session storageで確認可能である。

# Local Storage, Session Storage, Cookieの違い

|  | Local Storage | Session Storage | Cookie |
| --- | --- | --- | --- |
| データ保存期間 | 半永久的 | ウィンドウを閉じたり、長時間滞在しsessionが終了するまで | 指定期間 |
| 保存容量 | 5-10MB | 5-10MB | 4KB |
| 別ウィンドウからのアクセス | 可能 | 不可能 | 可能 |
