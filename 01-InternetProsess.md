# 自分の家のPCからインターネットの一つのWebサイトに繋がるまでのプロセスをなるべく詳細に説明する

> 自分の家のPCからインターネットの一つのWebサイトに繋がるまでのプロセスをなるべく詳細に説明する
>
1. URLを解読する

    例えばURLはこのような構成で用いられる。http://twitter.com/riku(スキーム/ドメイン/パス)


    - スキーム

        スキームには通信プロトコルが格納されている。通信プロトコルとはインターネットを通じてやり取りを行う際のルールである。代表的なものにはHTTP・HTTPSがある。
        スキームを解釈するのはブラウザの責任であり、ブラウザはスキームを確認し適切な接続方法を選択する必要がある。
        ポートを指定しない場合はそれぞれのスキームごとデフォルトのポート番号を使用する。HTTPなら80番、HTTPSなら443番である。これらのデフォルトのポート番号のことをウェルノウンポートという。

    - ドメイン

        ドメインとはIPアドレスを人間が認識できるように文字列へ変換したものである。

        - IPアドレス

            インターネット上の住所のようなものである。208.65.153.238のような10進数の数字の羅列で表現される。

    - パス

        情報が存在する階層

2. キャッシュにIPアドレスが無いか確認する。
キャッシュを確認し、以前訪れたサイトであるかの確認を行う。無いのであればドメインを用いてDNSサーバに問い合わせる。
    - edge://net-internals/#dnsなどで確認可能である
    - DNSサーバ

        ドメイン名とIPアドレスの紐づけを管理し、変換を行うサーバである。これはDNSサーバの中でも親権DNSサーバにあたり、ドメイン名とIPアドレスの対応表をゾーンという単位で管理している。
        IPアドレスの電話帳や通訳者のようなものである。

3. DNSサーバに問い合わせる
   - ドメインからIPアドレスを特定する。特定したIPアドレスをブラウザへレスポンスする。
4. 取得したIPアドレスからWebサーバへリクエストする。
    - ポート番号の割り当て
    URLに組み込まれていたスキームからプロトコルに則って情報の受け渡しを行う。
    - HTTPリクエストを行う、HTTPはリクエストライン・ヘッダ・空行・メッセージボディで構成される。
    り
        - リクエストライン

            HTTPリクエストの一行目にあたる。メソッド/リクエスト対象/HTTPバージョンで構成される。

        - リクエストヘッダ

            二行目からのHost: ~から空行を意味する\r\nまでがリクエストヘッダである。

5. WebサーバがHTTPレスポンスを送信する
    - 基本的にHTTPリクエストと同じ構成だが、ステータスコードやメッセージボディにHTMLなどデータが記述されている。
6. レンダリングする
    -  ブラウザに送られてきたHTMLファイルをパース(解析)し、メモリ上にDOMツリーとCSSOMツリーを構築、これを元手にレンダーツリーを構築し、レイアウト計算を行い、画面にペインティング(描写)を行う。

