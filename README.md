# Dokumentasi

Pertama ubah file `env` ke `.env`.

# Base Url

Pastikan untuk selalu mengecek url yang bisa diakses web otakudesu, karena domain selalu berubah. Anda bisa mengeceknya disini https://web.facebook.com/otakudesu.fanshare?_rdc=1&_rdr.

Lalu taruh url tersebut di file `.env`.

# Menjalankan

Untuk menjalankan koding ini ketikkan perintah berikut:

```yaml
npm start
```

Tentu ini di terminal ya!

server berjalan di PORT `8000`.

`localhost:8000`.

# Endpoint API

Berikut adalah endpoint untuk otakudesu scrapper:

### {url}/api/anime/v1/ongoing

Endpoint tadi akan menghasilkan list anime yang masih `ongoing`.

Result:

```yaml
  statusCode: 200,
  status: 'OK',
  data: [
    url: ....,
    slug: ....,
    thumbnail: ....,
    title: ....,
    episode: ....,
    schedules: ....,
  ]

```

### {url}/api/anime/v1/completed

Endpoint tadi akan menghasilkan list anime yang masih `completed`.

Result:

```yaml
  statusCode: 200,
  status: 'OK',
  data: [
    url: ....,
    slug: ....,
    thumbnail: ....,
    title: ....,
    episode: ....,
    rating: ....,
  ]

```

### {url}/api/anime/v1/info/?name={slug}

Untuk endpoint ini akan memberikan informasi soal anime tersebut.

example: `/api/anime/v1/info/?name=op-sub-indo`

Result:

```yaml
  statusCode: 200,
  status: 'OK',
  data: {
    imgUrl: ...,
    title: ...,
    slug: ...,
    description: ...,
    first_episode: {
      episode: ...,
      slug: ...,
    },
    last_episode: {
      episode: ...,
      slug: ...,
    },
    info: [...],
    episodes: [
      {
        uri: ...,
        eps: ...,
        slug: ..,
      },
      ...
    ]
  }
```

### {url}/api/anime/v1/watch/?slug={slug}

Untuk endpoint ini akan memberikan informasi soal data episode beserta link stream anime tersebut.

example: `/api/anime/v1/watch/?slug=wpoiec-episode-1047-sub-indo`

Result:

```yaml
  statusCode: 200,
  status: 'OK',
  data: {
    title: ...,
    video_uri: ...,
    thumbnail: ...,
    first_episode: {
      episode: ...,
      slug: ...,
    },
    last_episode: {
      episode: ...,
      slug: ...,
    },
    episodes: [
      {
        uri: ...,
        eps: ...,
        slug: ..,
      },
      ...
    ]
  }
```
