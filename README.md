# Dokumentasi

Pertama ubah file `env` ke `.env`.

# Base Url

Pastikan untuk selalu mengecek url yang bisa diakses web otakudesu, karena domain selalu berubah. Anda bisa mengeceknya disini https://web.facebook.com/otakudesu.fanshare?_rdc=1&_rdr

# Endpoint API

Berikut adalah endpoint untuk otakudesu scrapper:

## url/api/anime/v1/ongoing

Endpoint tadi akan menghasilkan list anime yang masih `ongoing`.

Result:

```
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

## url/api/anime/v1/completed

Endpoint tadi akan menghasilkan list anime yang masih `completed`.

Result:

```
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
