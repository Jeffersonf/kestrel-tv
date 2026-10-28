import type { Channel } from '../types';

export const FALLBACK_CHANNELS: Channel[] = [
  {
    "name": "CazéTV (Ao Vivo)",
    "category": "Jogos & Esportes",
    "logo": "https://commons.wikimedia.org/wiki/Special:FilePath/Caz%C3%A9TV_wordmark.svg?width=300",
    "sources": [
      {
        "url": "https://amg01391-amg01391c10-tcl-br-9630.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "1080p FHD (Oficial TCL)"
      },
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16337",
        "quality": "720p HD"
      }
    ],
    "id": "ch_1_caz%C3%A9tv_(ao_vivo)"
  },
  {
    "name": "NSports Ao Vivo",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/nsports.png",
    "sources": [
      {
        "url": "https://ogc-nsprt-tcl-roku-syndication.otteravision.com/ogc/nsprt/nsprt_720p.m3u8",
        "quality": "720p HD (Oficial Roku)"
      },
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=16337",
        "quality": "HD"
      }
    ],
    "id": "ch_2_nsports_ao_vivo"
  },
  {
    "name": "Red Bull TV Esportes",
    "category": "Jogos & Esportes",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Red_Bull_TV_logo.svg/320px-Red_Bull_TV_logo.svg.png",
    "sources": [
      {
        "url": "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
        "quality": "1080p FHD (Oficial)"
      }
    ],
    "id": "ch_3_red_bull_tv_esportes"
  },
  {
    "name": "FIFA+ Ao Vivo",
    "category": "Jogos & Esportes",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/FIFA%2B_logo.svg/320px-FIFA%2B_logo.svg.png",
    "sources": [
      {
        "url": "https://fifa-fifaplus1-1-br.samsung.wurl.tv/playlist.m3u8",
        "quality": "1080p FHD (Samsung TV Plus)"
      }
    ],
    "id": "ch_4_fifa%2B_ao_vivo"
  },
  {
    "name": "A&E",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/ae.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/88b8aefdec5f0ef1cdc7477e04e7cdfa/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/ae/ae.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDg2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518547.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518548.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518549.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90647.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71760.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71762.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71763.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90647.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71760.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71762.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71763.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81599.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13497.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23156.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23157.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDg3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDg4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_5_a%26e"
  },
  {
    "name": "Adult Swim",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/adultswim.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/1167fe66d918c2b48a68300d5dd8d4ca/adultswim.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/adultswim",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/aade359ef7e7d0d9682e2e5825345d6d/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/adultswim.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/155c57d887e879fa1e273477160c90cc/adultswim.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/adultswim",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/adultswim/adultswim.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518592.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518594.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/251957.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/251958.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/251959.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/251960.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/251961.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/251957.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/251958.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/251959.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/251960.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/251961.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.185.11.126:8000/play/a06m/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQyMDQ5Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_6_adult_swim"
  },
  {
    "name": "AMC",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/amc.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/bd2aca80ba2bb4c9c7d58b110dd9f96c/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/amc.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/amc/amc.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mjk0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90646.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71768.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71769.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71770.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71771.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90646.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71768.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71769.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71770.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71771.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81601.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13498.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23687.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23688.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a06s/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mjk1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mjk2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_7_amc"
  },
  {
    "name": "Animal Planet",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/animalplanet.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/b334d79db281e34cdadd49b0feff5c9d/animalplanet.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/animal-planet",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/847c797790cf3e5db3f674499481eb6e/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/animalplanet.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/f8aeec6dfc86c2ab66efa1ee0dcf88cf/animalplanet.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/animal-planet",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/animalplanet/animalplanet.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDA2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296619.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296620.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296621.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324374.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71774.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71772.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71773.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71775.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71776.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71774.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71772.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71773.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71775.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71776.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304490.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304493.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304491.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304492.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71774.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDA3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDA4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_8_animal_planet"
  },
  {
    "name": "Band",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/band.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/730ac1333b65dfb93db561cc2a4f2a53/bandsp.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/band",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://vipwaytvcdn.multtv.tv.br:5444/TVThathi_Band/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/band.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/07796236cd172aa71cce222d1f7e3864/bandsp.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/band",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://138.204.86.4:8080/BAND_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324357.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324358.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324376.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://vipwaytvcdn.multtv.tv.br:5444/TVThathi_Band/720p/index.m3u8"
      }
    ],
    "id": "ch_9_band"
  },
  {
    "name": "Cartoon Network",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/cartoonnetwork.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/f20eee8ca370156a3e6ee41459384861/cartoonnetwork.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cartoon-network",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b9399cc1add67ffa4a4fb3ef51335b36/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/cartoonnetwork.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/2a5902a94396cefa6fe0ce92ba674726/cartoonnetwork.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cartoon-network",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/CARTOON_NETWORK/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cartoonnetwork/cartoonnetwork.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mzk5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882622.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882623.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882624.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71830.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71828.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71831.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71832.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71830.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71828.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71831.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71832.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125439.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13504.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8698.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8699.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38015.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38016.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDAwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDAxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_10_cartoon_network"
  },
  {
    "name": "CNN Brasil",
    "category": "Notícias",
    "logo": "https://img.faz-o-eli.online/cnnbrasil.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/4b31648104a3eabb9f1982ff6513147d/cnnbrasil.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cnn-brasil",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://d25usgadhphvwi.cloudfront.net/hls/stv-plus1920x1080/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.162.64.114/CNN_BRASIL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/84fb36b0e1e31ed913812068f8b0e7e0/cnnbrasil.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cnn-brasil",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cnnbrasil/cnnbrasil.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDY0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/07c3fcccfd4cdc050020dd59b9697e40/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://amg01391-sbtinfast-amg01391c4-lg-br-4597.playouts.now.amagi.tv/playlist/amg01391-addigital-cnnbrasil-lgbr/playlist.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324379.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71798.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71837.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71838.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71839.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71840.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71798.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71837.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71838.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71839.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71840.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81597.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8711.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8712.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30166.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30167.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71840.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDY1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDY2Lm0zdTg.m3u8",
        "quality": "SD"
      },
      {
        "url": "https://amg01391-sbtinfast-amg01391c4-lg-br-4597.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg01391-addigital-cnnbrasil-lgbr/cb573e1e7b6c608d84c83f60cef24282967b3dcb0e6c886470af4a9765d97800dbe8ae84ae5b910c4c9e1fc061017d360439cd1dd56c49c1da63b820743c4b21fdcde00080dd0d0cb1df11292ca36265299a7369cc350f7bd2ec5a2f803ebe764c53cb017c593f88f258a8744cc59e0a957f39e8fc8b307b24455a9c5a43e6a64ed6abb64244dd6ebfb102488b2f57f38117ced415e9d48746cf128627ec159cc4f196da11d7d28c32f85ee7360d5b762e988421a12e3cdcabf2e3842f1052243c67a4c5b1ec4f268f4b3124929df89e15319753eb5fec5338ae14900fa53d8f79a30aa69b3ec8577e6c23335083d15a7332acedaf99b9415b2cba49c39bbf404ce39f277948895dd9372737da9aa171d49445c6e671c2dc036c70de7d9c9094e523964cde88487292e054d24c634366160b855ceda96cd416ed79bdc21c1bfb2c2eb0b75ade8fd552312d1ac8d01e9c2412b7df8494cc4e15fe204a0aa630821b3265c2623827a535afce752ca8361a89300afe5a1e8956b3ed7fa2e988b346739ef6f36fd323afb903d9f3428e683f520dfab20f57574370d5a137586237930bb49d9aa1440806ede5c4b195006f496a4112298fe5a821cedc8e7953468f0354151e7a209f0ad266c81309517ebb79fd984925d5487157a9cd5670536f84c7a28e81c2b82d9876d0ddf22a203d4d19d31601216b93fbcd6ef4364f716d4ec2684046ae0c4e4dfa9faab4c0d78eaf7b923c8c04fe968932a6a54d2d6641655a4e274dd8/197/1920x1080_7582265/index.m3u8"
      }
    ],
    "id": "ch_11_cnn_brasil"
  },
  {
    "name": "CNN Brasil Money",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/cnn-brasil-money.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yOTU0ODIubTN1OA.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://amg01391-amg01391c57-amgplt0026.playout.now3.amagi.tv/playlist/amg01391-amg01391c57-amgplt0026/playlist.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yOTU0ODYubTN1OA.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yOTU0ODMubTN1OA.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yOTU0ODQubTN1OA.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295482.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295483.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295484.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295485.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295486.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295482.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295483.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295484.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295485.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295486.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/295482.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_12_cnn_brasil_money"
  },
  {
    "name": "E!",
    "category": "Variedades",
    "logo": "https://commons.wikimedia.org/wiki/Special:FilePath/E%21_Logo_Flat_2012.svg?width=300",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDk4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://video49.mais.uol.com.br/live/4503.mpd",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518559.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518560.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518561.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103506.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71900.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71901.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71902.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71903.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103506.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71900.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71901.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71902.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71903.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8782.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8783.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/103506.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDk5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTAwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_13_e!"
  },
  {
    "name": "GE TV",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/ge-tv.png",
    "sources": [
      {
        "url": "https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist1080p.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://proxylinkurl.wored85282.workers.dev/https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/getv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjExODE2MC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://dfr80qz435crc.cloudfront.net/EFGH/Amagi/Globo/GE_Fast_BR/GE_Fast.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460155.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460156.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460157.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1139277.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08v/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvOTY1NDAwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjExODE2MS5tM3U4.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_14_ge_tv"
  },
  {
    "name": "GloboNews",
    "category": "Notícias",
    "logo": "https://img.faz-o-eli.online/globonews.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/f40b5972e5f78e715aaf2034cdaac946/globonews.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/globo-news",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f3a5862f221237de091a5cfdee339c76/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/6ca0fa6a24a397e4b47dc8d32fb23e44/globonews.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/globo-news",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globonews/globonews.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/globonews/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDY5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://79.127.238.228:14093",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324385.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90248.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71997.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71998.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71999.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131112.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90248.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71997.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71998.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71999.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131112.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81598.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13523.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8853.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8854.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30168.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30169.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08d/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDcwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDcxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_15_globonews"
  },
  {
    "name": "Globoplay Novelas",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/globonovelas.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/55a9732537da5a058ab4fedb2904cf80/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globonovelas/globonovelas.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTQ5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://79.127.238.228:14455",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324400.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518595.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518596.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518597.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103450.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72428.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72429.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72430.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103450.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72427.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72428.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72429.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72430.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107983.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13496.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/43930.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9215.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131428.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9216.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/33453.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/103450.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTUwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTUxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_16_globoplay_novelas"
  },
  {
    "name": "GNT",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/gnt.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/384dccb02044b9703602763a4a514e04/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/gnt/gnt.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/gnt/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTEwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://79.127.238.228:14402",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324387.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518568.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518569.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518570.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90638.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72102.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72103.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72104.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131136.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90638.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72102.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72103.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72104.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131136.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107984.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13527.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8891.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8890.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/66901.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/66902.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a079/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTExLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTEyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_17_gnt"
  },
  {
    "name": "History",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/history.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/575a47cf188e44f46687363629749b7f/history.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/history",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/03b263d45890d365b1c558fbfb2540d9/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/history.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/b7f760cafffad9e253824034a05a8138/history.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/history",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://138.204.86.4:8080/HISTORY_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/history/history.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDUwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://46.151.196.223:14410",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.114/HISTORY/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://170.83.16.50/HISTORY/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296613.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296614.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296615.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90244.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72146.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72147.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72148.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72149.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90244.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72146.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72147.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72148.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72149.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304495.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304497.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304494.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304496.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0al/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDUxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDUyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_18_history"
  },
  {
    "name": "History 2",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/history2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d3f60f62492ba516571cb0c2e1986bb9/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/history2.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/history2/history2.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296617.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/296618.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90245.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72106.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72108.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72109.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90245.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72106.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72108.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72109.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304499.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304501.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304498.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304500.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_19_history_2"
  },
  {
    "name": "Jovem Pan News",
    "category": "Notícias",
    "logo": "https://www.tvlogo.org/brazil/jovem-pan-news-br.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDcyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://amg01391-sbtinfast-amg01391c3-lg-us-8995.playouts.now.amagi.tv/playlist/amg01391-addigital-jovempan-lgus/playlist.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://170.83.49.66:8083/JOVEMPANNEWSHD/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://186.219.52.187/jp_news/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324388.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/134021.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/134022.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/134025.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/134021.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/134023.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/134022.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/134024.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/134025.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108191.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/167984.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107918.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/167985.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDczLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDc0Lm0zdTg.m3u8",
        "quality": "SD"
      },
      {
        "url": "https://amg01391-amg01391c3-tcl-spain-5038.playouts.now.amagi.tv/playlist1080-p.m3u8"
      }
    ],
    "id": "ch_20_jovem_pan_news"
  },
  {
    "name": "Megapix",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/megapix.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/4449454c379f5034e01629ff759af317/megapix.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/megapix",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/291ef8b9e9ad80e39ef2a2bd870c821c/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/cc13f77891f8b4080db512be42439d82/megapix.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/megapix",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/megapix/megapix.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/megapix/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzE3Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://79.127.238.228:14592",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72166.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72167.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90680.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72169.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131118.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131204.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131171.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72166.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72167.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90680.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72169.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131118.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131204.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131171.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107982.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/43933.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8961.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8962.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a057/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzE4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzE5Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_21_megapix"
  },
  {
    "name": "Multishow",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/multishow.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a2bb656cdb461a7db6d90e934fdc74b2/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/20aa200451a750a1367af30f8268595a/multishow.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/multishow",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/f0c2adfea3778abad92dc655d5b961a9/multishow.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/multishow",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/multishow/multishow.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/multishow/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTMwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518580.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518581.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518582.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131138.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131193.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72182.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131134.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131138.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131193.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72182.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131134.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13540.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8974.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8975.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/131193.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTMxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTMyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_22_multishow"
  },
  {
    "name": "Premiere 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/53642c8dfee785c9212c3adc0d9026c7/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere2/premiere2.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere/premiere.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere2/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460212.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460213.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72237.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72238.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72239.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72240.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72237.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72238.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72239.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72240.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81582.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9022.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13576.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69097.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69028.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69029.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72237.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA0NS5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_23_premiere_2"
  },
  {
    "name": "Premiere 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/9a34ec0bc8346d28e5f07c52d79f1c05/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere3/premiere3.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere3/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQzLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460215.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460217.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103481.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72241.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72242.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72243.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72244.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103481.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72241.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72242.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72243.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72244.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81583.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13577.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69030.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69031.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30051.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9026.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72241.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ0Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA0Ni5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ1Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_24_premiere_3"
  },
  {
    "name": "Premiere 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f6406f6ac40d211c11d4bee1f77799f1/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere4/premiere4.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere4/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460218.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103480.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72246.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72247.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72248.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103480.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72245.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72246.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72247.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72248.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81616.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108295.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108296.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108297.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108298.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108300.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72245.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA0Ny5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_25_premiere_4"
  },
  {
    "name": "Premiere 5",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/dbb05abf5ba0263b0895b8ad62a06a7a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/premiere5.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere5/premiere5.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere5/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzQ5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460221.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103479.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72249.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72250.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72251.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72252.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103479.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72249.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72250.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72251.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72252.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/82751.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108301.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108302.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108305.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108303.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108304.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108306.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72249.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzUwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA0OC5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzUxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_26_premiere_5"
  },
  {
    "name": "Premiere 6",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/premiere.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460224.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere6/premiere6.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere6/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzUyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460225.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460226.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103478.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72253.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72254.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72255.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72256.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103478.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72253.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72254.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72255.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72256.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/82753.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108307.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108308.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108309.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108310.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05j/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzUzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA0OS5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzU0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_27_premiere_6"
  },
  {
    "name": "Premiere 7",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere7/premiere7.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere7/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzU1Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460227.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460228.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460229.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103477.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72257.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72259.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72260.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103477.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72257.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72259.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72260.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108313.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108314.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108317.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108315.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108316.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05k/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzU2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEyNzA1MC5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzU3Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_28_premiere_7"
  },
  {
    "name": "Premiere 8",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/premiere.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460230.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/premiere8/premiere8.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiere8/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xODAxNTgubTN1OA.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460231.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460232.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xODAxNjIubTN1OA.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xODAxNTkubTN1OA.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xODAxNjAubTN1OA.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/180162.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/180158.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/180161.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/180159.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/180160.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/180162.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/180158.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/180161.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/180159.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/180160.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13582.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9036.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05l/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_29_premiere_8"
  },
  {
    "name": "Premiere Clubes",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/premiere.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/20963c6e5d27cc11975d36a05dcb1484/premiere.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/premiere",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/23868c7d5fa2918f720058576d31584a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/premiereclubes.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/5e65f671ec576e6450321263a220056f/premiere.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/premiere",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://16-5-0-235.sslip.io/premiereclubes/index.m3u8"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324401.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460210.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460211.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72262.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72263.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72265.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72266.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72262.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72263.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72265.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72266.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125438.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9037.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/54902.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94194.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13583.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.185.11.126:8000/play/a06g/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_30_premiere_clubes"
  },
  {
    "name": "SBT",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sbt.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/SBT_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aovivo.maissbt.com/indexMobile.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://6836041ea1117.streamlock.net/cverde/cverde/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324290.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324292.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324390.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9082.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81580.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81610.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/26722.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9084.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30120.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_31_sbt"
  },
  {
    "name": "SBT News",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sbt-news.png",
    "sources": [
      {
        "url": "https://sbtnews.maissbt.com/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://dai.google.com/linear/hls/event/1XSOdtQ0SH2G8OEmEfGgjQ/master.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1129618.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1129619.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0a7/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjE0NjU0MS5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://sbtnews.maissbt.com/3.m3u8"
      }
    ],
    "id": "ch_32_sbt_news"
  },
  {
    "name": "Sony Channel",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/sonychannel.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sonychannel/sonychannel.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/ce3b9c75cda7d27415c833c9a999fad5/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzI1Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://170.83.16.50/SONY_CHANNEL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103517.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71824.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71825.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71826.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71827.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103517.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71824.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71825.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71826.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71827.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108180.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13584.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9098.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9099.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzI2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzI3Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_33_sony_channel"
  },
  {
    "name": "SporTV",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/f809a47c8a40c3642b96a3df2c2e563c/sportv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/sportv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d4b93407c8e2e95b00d9cae0990d47ae/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/sportv.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/df68c287a5e76abe2df09d30cb0e9b37/sportv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/sportv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sportv/sportv.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://16-5-0-235.sslip.io/sportv/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjMyOS5tM3U4.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324391.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460200.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460202.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzExODgubTN1OA.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjMzMi5tM3U4.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzExMzIubTN1OA.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131188.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72329.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72330.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72332.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131132.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131188.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72329.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72330.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72332.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131132.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81591.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69096.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9107.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9111.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30126.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30127.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/131132.m3u8",
        "quality": "SD · 852x480"
      }
    ],
    "id": "ch_34_sportv"
  },
  {
    "name": "SporTV 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/583376e665ab4a7be7696a48f7485c14/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/sportv2.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sportv2/sportv2.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/sportv2/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzM4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460203.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460204.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103472.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72321.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131176.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72324.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103472.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72321.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131176.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72324.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81592.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13586.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30123.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05f/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzM5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTgwNTYyNy5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzQwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_35_sportv_2"
  },
  {
    "name": "SporTV 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv3.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f91e4cbe649600e698fd671e2a8d7ea0/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/sportv3.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sportv3/sportv3.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/sportv3/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzQyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460206.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460207.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72325.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72326.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131113.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131108.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103471.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72325.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72326.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131113.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131108.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103471.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81593.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9106.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9105.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30124.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a06v/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzQzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTgwNTYzMC5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI0NzQ0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_36_sportv_3"
  },
  {
    "name": "Canal OFF",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/off.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/95c0c4c76d7121191d8c2164d9ba6de3/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/off/off.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518583.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518584.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518585.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72209.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72210.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72211.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72212.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72209.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72210.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72211.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72212.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8996.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8997.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8998.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a07t/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_37_canal_off"
  },
  {
    "name": "Telecine Action",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecineaction.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/19169227b38228adaf6515f4075c6255/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/telecineaction.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecineaction/telecineaction.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc3Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324393.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90239.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72346.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72347.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90668.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72348.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90667.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72349.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90666.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90239.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72346.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72347.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90668.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72348.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90667.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72349.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90666.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94375.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24533.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9126.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9127.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30134.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30135.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a058/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc5Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_38_telecine_action"
  },
  {
    "name": "Telecine Pipoca",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecinepipoca.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/telecinepipoca.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecinepipoca/telecinepipoca.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324396.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72358.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72359.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90659.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72360.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90658.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72361.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90657.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72358.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72359.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90659.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72360.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90658.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72361.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90657.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94378.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24536.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9131.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9132.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30140.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30141.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08g/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_39_telecine_pipoca"
  },
  {
    "name": "Telecine Premium",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecinepremium.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/telecinepremium.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a47100046c32c6403466555d35dd55fb/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecinepremium/telecinepremium.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324397.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90237.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72362.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72363.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90656.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72364.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90655.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72365.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90654.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90237.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72362.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72363.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90656.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72364.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90655.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72365.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90654.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94379.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24537.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9133.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9134.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30142.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72362.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzc2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_40_telecine_premium"
  },
  {
    "name": "TV Brasil",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-brasil.png",
    "sources": [
      {
        "url": "https://tvbrasil-stream.ebc.com.br/index.m3u8",
        "quality": "SD · 576x324",
        "referer": "https://meufut.top/tv-brasil",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/TV_BRASIL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/TV_BRASIL/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103463.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72399.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72400.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72401.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103463.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72399.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72400.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72401.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/43030.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/33013.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71816.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_41_tv_brasil"
  },
  {
    "name": "Universal Premiere",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/universal-premiere.png",
    "sources": [
      {
        "url": "http://45.185.11.126:8000/play/a08m/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_42_universal_premiere"
  },
  {
    "name": "Universal Reality",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/universal-reality.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518601.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518602.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518603.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08c/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTc1MjMyNC5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_43_universal_reality"
  },
  {
    "name": "Warner",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/warnerchannel.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/warnertv.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/3aec09245d4b83b891d69d078790428a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/warnerchannel/warnerchannel.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72431.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72432.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90650.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72433.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90649.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72434.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90648.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72431.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72432.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90650.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72433.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90649.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72434.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90648.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107981.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/21684.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9219.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9220.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_44_warner"
  },
  {
    "name": "IMPD",
    "category": "Variedades",
    "logo": "https://d5pgibznjcs0s.cloudfront.net/46d92cf6-4807-45c6-9bfd-b38f80288c86/en/images/logo_full.png",
    "sources": [
      {
        "url": "https://68882bdaf156a.streamlock.net/impd/ngrp:impd_all/chunklist_w1464410885_b2691072.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://igrejamundial.nuvemplay.live/hls/stream.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://68882bdaf156a.streamlock.net/impd/ngrp:impd_all/chunklist_w766912441_b2691072.m3u8"
      }
    ],
    "id": "ch_45_impd"
  },
  {
    "name": "Globo SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/25c389d4965f4166247f2280886f5cba/globosp.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/globo",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0a3f908b929b0e6ef32df80820a3fdbd/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globosp/globosp.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://16-5-0-235.sslip.io/globosp/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjA0MC5tM3U4.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324386.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzEyMTIubTN1OA.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjA0Mi5tM3U4.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72040.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131212.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72042.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72040.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131212.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72042.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168916.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168917.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168918.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72040.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_46_globo_sp"
  },
  {
    "name": "Cartoonito",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/cartoonito.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/06fb008bc2fe2c3944c72e0c3ca551d4/cartoonito.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cartoonito",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/e71f498def2db9ccef02e6e33f1fb454/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/25787f329c85c3fee8876507d3b3778a/cartoonito.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cartoonito",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cartoonito/cartoonito.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDAzLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882631.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882632.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882633.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90644.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71812.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71814.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90644.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71812.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71814.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71815.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13503.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8687.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8688.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38013.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/106287.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0ae/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDA0Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDA1Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_47_cartoonito"
  },
  {
    "name": "Cinemax",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/cinemax.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/CINEMAX/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/dd86bfa9bcb6a7ac4c845c436f9a7f15/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cinemax/cinemax.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzA5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90643.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71833.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71834.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71835.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71836.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90643.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71833.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71834.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71835.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71836.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107978.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13505.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8708.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8709.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a081/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzEwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzExLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_48_cinemax"
  },
  {
    "name": "Discovery Channel",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoverychannel.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/abda9d242318532ccceeb60faa73e3cf/discoverychannel.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-channel",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/ef788417269a3b916fa9b954c8136d38/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/discoverychannel.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/a1d16892ebba8e03b94f103b89c154c0/discoverychannel.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-channel",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoverychannel/discoverychannel.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDE4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297936.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297937.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297938.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324381.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71862.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71863.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71865.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71866.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71862.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71863.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71865.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71866.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91396.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13508.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/43928.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8735.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131176.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8736.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30148.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71862.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDE5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDIwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_49_discovery_channel"
  },
  {
    "name": "Discovery Kids",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/discoverykids.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/86c15a533bf883acfde634c9b2077da0/discoverykids.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-kids",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/discoverykids.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/5a43285f2c9b46548851d73ff8ae7190/discoverykids.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-kids",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_KIDS_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoverykids/discoverykids.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDA3Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0ce2f30af691ebeb0eab4d07b031c907/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297946.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90250.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71871.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71872.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71873.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71874.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90250.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71871.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71872.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71873.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71874.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125440.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8742.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8743.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38017.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38018.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0ad/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDA4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDA5Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_50_discovery_kids"
  },
  {
    "name": "Discovery Theater",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoverytheater.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/discoverytheater.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_THEATER_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoverytheather/discoverytheather.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDMwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/53bc92aa7cade39f054816d89f5d24bd/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297954.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297956.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103510.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71879.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71880.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71881.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71882.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103510.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71879.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71880.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71881.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71882.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91401.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13510.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8748.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8751.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93904.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30153.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a085/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDMxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDMyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_51_discovery_theater"
  },
  {
    "name": "ESPN",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/48cae3919e89e385e3789102c01f9a97/espn.m3u8",
        "quality": "HD · 1280x720 @ 60fps",
        "referer": "https://meufut.top/espn",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b5effc33c1848e4f0ff6f89295642e20/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/ESPN_BRASIL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/dbf76b5a3f66249763951288cbd98053/espn.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/espn",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn/espn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn/index.m3u8"
      },
      {
        "url": "http://138.204.86.4:8080/ESPN_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTkxMS5tM3U4.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://181.78.197.59:8000/play/a07z/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460182.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460183.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460184.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy85MDY0MC5tM3U4.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTkxMy5tM3U4.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTkxNC5tM3U4.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90640.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71911.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71912.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71913.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71914.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90640.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71911.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71912.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71913.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71914.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598912.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598913.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598914.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598916.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598917.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/598918.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_52_espn"
  },
  {
    "name": "ESPN 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn2.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/ESPN2_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/62f5abcce049f75e52031599456334dc/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn2/espn2.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn2/index.m3u8"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460185.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460186.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460187.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71920.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71922.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71923.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71920.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71922.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71923.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81587.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13519.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8786.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131131.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30072.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30071.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71919.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTIzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTIyLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTI0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_53_espn_2"
  },
  {
    "name": "ESPN 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn4.png",
    "sources": [
      {
        "url": "http://45.162.64.114/ESPN_4/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/e0c88bb2a1753c87f83b2b01e269b51a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn4/espn4.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn4/index.m3u8"
      },
      {
        "url": "http://138.204.86.4:8080/ESPN4_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://181.78.197.59:8000/play/a07n/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460191.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460192.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460193.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71959.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71957.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71958.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71960.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71961.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71959.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71957.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71958.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71960.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71961.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81578.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/21647.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8828.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20947.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30083.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30082.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05m/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTMxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTMwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTMyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_54_espn_4"
  },
  {
    "name": "ESPN 5",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn5.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/433c11bcf1d5ec34721d8de73245ca76/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn5/espn5.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn5/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTM0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460194.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460195.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71952.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71953.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71955.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71956.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71952.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71953.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71955.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71956.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20946.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8827.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30081.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30084.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05n/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTM1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTgxMDUzMS5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTM2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_55_espn_5"
  },
  {
    "name": "ESPN 6",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn6.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/6e5b147da553df9bd66bfecf362267ef/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn6/espn6.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn6/index.m3u8"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460197.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460198.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71915.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71916.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71917.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71918.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71915.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71916.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71917.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71918.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81590.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131138.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8794.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30077.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a084/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTM5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTM4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_56_espn_6"
  },
  {
    "name": "HBO",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbo.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/692c8a457cfd6bc868cfea12ca938214/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hbo.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hbo/hbo.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514107.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514108.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90247.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72118.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72119.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90698.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72120.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90697.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72133.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90696.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90247.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72118.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72119.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90698.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72120.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90697.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72133.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90696.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94381.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8902.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8903.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31862.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31863.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72133.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQ0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_57_hbo"
  },
  {
    "name": "HBO2",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbo2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/575460dfdaaba6fc03cb2b7224662909/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hbo2.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO2/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hbo2/hbo2.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQ2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514110.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514111.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90246.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72110.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72111.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72112.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72113.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90246.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72110.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72111.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72112.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72113.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94382.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13529.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8897.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8898.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31859.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93899.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08o/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQ3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTQ4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_58_hbo2"
  },
  {
    "name": "HBO Family",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbofamily.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b861516da26de936d373b90c7bddd8a8/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hbofamily.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO_FAMILY/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hbofamily/hbofamily.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTUwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514113.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514114.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90637.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72114.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72115.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72116.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90637.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72114.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72115.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72116.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94383.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13530.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8901.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8900.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31860.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31861.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72114.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTUxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTUyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_59_hbo_family"
  },
  {
    "name": "HBO Mundi",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbomundi.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/HBO_MUNDI_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/e6576acf6dd245e12a66873869982f6c/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hbomundi/hbomundi.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTU0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514116.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514117.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103496.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72121.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90695.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72123.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90694.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72124.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90693.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103496.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72121.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90695.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72123.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90694.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72124.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90693.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94384.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13531.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8904.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8905.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31864.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93900.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72123.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTU1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTU2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_60_hbo_mundi"
  },
  {
    "name": "HBO Plus",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hboplus.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/142cdbde27f344bcf3ae8eab9454dc81/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hboplus.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO_PLUS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hboplus/hboplus.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTU4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514119.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514120.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90635.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72125.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72126.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90692.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72127.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90691.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72128.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90690.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90635.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72125.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72126.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90692.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72127.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90691.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72128.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90690.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94385.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24592.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/11771.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31865.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31866.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTU5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTYwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_61_hbo_plus"
  },
  {
    "name": "HBO Pop",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbopop.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/2565c251ab74219a03e4b4fdb879e1ac/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hbopop.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO_POP_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hbopop/hbopop.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTYyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514122.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514123.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103495.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72129.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72130.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90689.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72131.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90688.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72132.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90687.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103495.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72129.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72130.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90689.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72131.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90688.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72132.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90687.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94386.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13533.m3u8",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24593.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8911.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31867.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93901.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a08s/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTYzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTY0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_62_hbo_pop"
  },
  {
    "name": "HBO Signature",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/hbo-signature.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/hbosignature.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/HBO_SIGNATURE/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTY2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514125.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514126.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72134.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72135.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90686.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72136.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90685.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72137.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90684.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72134.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72135.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90686.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72136.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90685.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72137.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90684.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94387.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13534.m3u8",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8912.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8914.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31868.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31869.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72134.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTY3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTY4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_63_hbo_signature"
  },
  {
    "name": "HBO Xtreme",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/hbo-xtreme.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/hboxtreme.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514128.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hboxtreme/hboxtreme.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTcwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514129.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90636.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72138.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72139.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90683.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72140.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90682.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72141.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90681.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90636.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72138.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72139.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90683.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72140.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90682.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72141.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90681.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13536.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13535.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8916.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31870.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a083/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTcxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTcyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_64_hbo_xtreme"
  },
  {
    "name": "Record",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/record-tv.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/record.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://video07.logicahost.com.br/portaltropicalrn/portaltropicalrn/chunklist_w1168987890.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://138.204.86.4:8080/RECORD/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://79.127.238.228:14057",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/35842.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_65_record"
  },
  {
    "name": "Space",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/space.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/167cfc64b5af287be1f19fb996d5c7ac/space.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/space",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/4b298b8f3b2b2c93e8c77e2326d679a3/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/space.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/3fb10b8d8fb288ba13970fe302430da2/space.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/space",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/SPACE/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/space/space.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://138.204.86.4:8080/SPACE_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzI5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72317.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72319.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72320.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72317.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72319.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72320.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108181.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13585.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9101.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9102.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzMwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzMxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_66_space"
  },
  {
    "name": "TNT",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/tnt.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/tnt.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://45.162.64.114/TNT/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tnt/tnt.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/tnt/index.m3u8"
      },
      {
        "url": "http://138.204.86.4:8080/TNT_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzQ4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72377.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72375.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72376.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90674.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72378.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90673.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72379.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90672.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72377.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72375.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72376.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90674.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72378.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90673.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72379.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90672.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594019.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594020.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594021.m3u8",
        "quality": "SD · 640x360"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594023.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72375.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzQ5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzUwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_67_tnt"
  },
  {
    "name": "TNT Séries",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/tntseries.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/53cae8d46c86aceec5a3928339017e1b/tntseries.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/tnt-series",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c47a55f30f719ec3a75fcc79960ab8da/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/tntseries.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/a80e0d116d93c753db030e98deedf0a2/tntseries.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/tnt-series",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tntseries/tntseries.m3u8",
        "quality": "SD · 1024x576"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzU2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72382.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72380.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90671.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72383.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90670.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72384.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90669.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72382.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72380.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90671.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72383.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90670.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72384.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90669.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108184.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24156.m3u8",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9144.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9145.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzU3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzU4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_68_tnt_s%C3%A9ries"
  },
  {
    "name": "Universal TV",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/universaltv.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/ed870f00aff7cf8192af3737e301669f/universaltv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/universal-tv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d8a16e530b281f562699d07a63bcfb19/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/64f3c19b505f7bebab5fd8177ced2c1e/universaltv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/universal-tv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/universaltv/universaltv.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzYwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://getcdn.clarocdn.com.br/Content/Channel/SPOUNVHD/dsc3/manifest.mpd",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324399.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90632.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72419.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72421.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72422.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90632.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72419.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72421.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72422.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108185.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/21683.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/21682.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9212.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/35256.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0af/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzYxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzYyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_69_universal_tv"
  },
  {
    "name": "Discovery Turbo",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoveryturbo.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/2e2f7fcdd9620e2618134f77cfb70e16/discoveryturbo.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-turbo",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/DISCOVERY_TURBO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/509a51408c36ab03ff0b43e6f4d571bc/discoveryturbo.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/discovery-turbo",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoveryturbo/discoveryturbo.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_TURBO_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDM0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/40eb11d05b4b31fccaadda44f0192c96/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297942.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297943.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297944.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324383.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518556.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518557.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518558.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90641.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71883.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71885.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71886.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90641.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71883.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71885.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71886.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91399.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13512.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8755.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8756.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30156.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30155.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a07z/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDM1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDM2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_70_discovery_turbo"
  },
  {
    "name": "USA Network",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/usa.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjMzOC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM0MC5tM3U4.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM0MS5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72338.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72339.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72340.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72341.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72338.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72339.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72340.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72341.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_71_usa_network"
  },
  {
    "name": "Telecine Fun",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecinefun.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecinefun/telecinefun.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/8b1b48c629b16b1b1a5a40d81bcd4373/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzgzLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324395.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72354.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72355.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90662.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72356.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90661.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72357.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90660.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72354.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72355.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90662.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72356.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90661.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72357.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90660.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94377.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24535.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9129.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9130.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30138.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30139.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a059/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzg0Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzg1Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_72_telecine_fun"
  },
  {
    "name": "Telecine Cult",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecinecult.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/telecinecult.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/6596e0d29e070ed4106e35cd57d181d2/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecinecult/telecinecult.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzgwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324394.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103456.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90665.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72352.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90664.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72353.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90663.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103456.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72350.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90665.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90664.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72353.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90663.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94376.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24534.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/11770.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9128.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30136.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30137.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a05a/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzgxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzgyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_73_telecine_cult"
  },
  {
    "name": "Telecine Touch",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/telecinetouch.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/telecinetouch.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/bb5d21dc07a14ff3f69f97e23ea72499/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/telecinetouch/telecinetouch.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4Mzg5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324398.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103454.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72366.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72367.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90653.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72368.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90652.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72369.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90651.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103454.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72366.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72367.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90653.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72368.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90652.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72369.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90651.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/94380.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/24538.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9135.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9136.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30144.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30145.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72366.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ4MzkwLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_74_telecine_touch"
  },
  {
    "name": "SONY Movies",
    "category": "Filmes e Séries",
    "logo": "https://www.tvlogo.org/brazil/sony-movies-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/SONY_MOVIES/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/SONY_MOVIES/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://168.197.104.22/SONY_MOVIES/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzIyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_75_sony_movies"
  },
  {
    "name": "Globo",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/globo.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/GLOBO_HD/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_76_globo"
  },
  {
    "name": "Tooncast",
    "category": "Infantil",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tooncast.png",
    "sources": [
      {
        "url": "http://170.83.16.50:80/TOONCAST/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/tooncast.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882638.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882639.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882640.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125444.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125443.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9150.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDMzLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_77_tooncast"
  },
  {
    "name": "TLC",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/tlc.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/tlc.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/948f4308cc7317ec0f826b1fd26f1afe/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tlc/tlc.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTM4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://79.127.238.228:14433",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518586.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518587.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518588.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103465.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72371.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72372.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72373.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72374.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103465.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72371.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72372.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72373.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72374.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91400.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13511.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8753.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8754.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72371.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_78_tlc"
  },
  {
    "name": "Arte 1",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/arte1.png",
    "sources": [
      {
        "url": "http://45.162.64.114/ARTE1/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/ARTE1/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://168.197.104.22/ARTE1/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103531.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71777.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71778.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71779.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71780.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103531.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71777.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71778.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71779.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71780.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/67511.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/67512.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71777.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTQ1NDM3Mi5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_79_arte_1"
  },
  {
    "name": "TNT Novelas",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/tntnovelas.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/tntnovelas.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/01b14977b5d3d47312eb06081c5ffc53/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tntnovelas/tntnovelas.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzUyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103466.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72342.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72343.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72344.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72345.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103466.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72342.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72343.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72344.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72345.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/275102.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/275101.m3u8",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/275103.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/275104.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72342.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzUzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzU0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_80_tnt_novelas"
  },
  {
    "name": "Discovery Science",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoveryscience.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/discoveryscience.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_SCIENCE_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoveryscience/discoveryscience.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDI2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/906736bd7449e0b498e4d470b0f68b1e/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297951.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103511.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71875.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71876.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71877.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71878.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103511.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71875.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71876.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71877.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71878.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91402.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13509.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8745.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8746.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93903.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30151.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71877.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDI3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDI4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_81_discovery_science"
  },
  {
    "name": "AXN",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/axn.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/808f75177af4a3cf8fd010cbc3433db2/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/axn.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://138.204.86.4:8080/AXN_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/axn/axn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mjk4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://170.83.16.50/AXN/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/AXNHD/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90645.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71781.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71782.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71783.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71784.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90645.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71781.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71782.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71783.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71784.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81600.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13500.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23691.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/23692.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71783.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1Mjk5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzAwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_82_axn"
  },
  {
    "name": "TCM",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/tcm.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tcm/tcm.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/256f1f08c9e0040fbfa0d775b232926a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzQ1Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9124.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzQ2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzQ3Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_83_tcm"
  },
  {
    "name": "Band News",
    "category": "Notícias",
    "logo": "https://img.faz-o-eli.online/bandnews.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/bandnews.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://45.162.64.114/BAND_NEWS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/bandnews/bandnews.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDYwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0e889a39ba6232f8651b18ddb7e4968f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.177.114.115/BAND_NEWS/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://168.197.104.22/BAND_NEWS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103526.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71789.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71791.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71792.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103526.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71789.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71791.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71792.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81596.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108367.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/11769.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30171.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71789.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDYxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDYyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_84_band_news"
  },
  {
    "name": "BAND SPORTS HD",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/bandsports.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/01465ed93fe93c584f3cce07f12b3f5e/bandsports.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/band-sports",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/bandsports.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/63959f42a8a5be2c41cdcb84fe993800/bandsports.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/band-sports",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/BAND_SPORTS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/bandsports/bandsports.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/bandsports/index.m3u8"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/aa99fb2d8839271b568aecf9f8a2fb6b/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://170.83.16.50/BAND_SPORTS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/BANDSPORTSHD/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324377.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460152.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460153.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460154.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71801.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71802.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71803.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71804.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71801.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71802.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71803.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71804.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81585.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8661.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8662.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30064.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/26724.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71801.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_85_band_sports_hd"
  },
  {
    "name": "RedeTV!",
    "category": "TV Aberta",
    "logo": "https://www.tvlogo.org/brazil/rede-tv-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/chunklist_w1074634538.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDczLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_86_redetv!"
  },
  {
    "name": "TV Cultura",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/cultura.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/c866aa18d1af50ecd63c81e37aa0eb67/cultura.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cultura",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b313c9f79dac3003d60d678ff03861f9/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cultura/cultura.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://v-us-01.wisestream.io/memfs/e8740862-7a1f-45f3-acb2-4f357e144059.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103513.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71853.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71854.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103513.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71851.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71853.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71854.m3u8",
        "quality": "SD"
      },
      {
        "url": "https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_87_tv_cultura"
  },
  {
    "name": "Terra Viva",
    "category": "Variedades",
    "logo": "https://www.tvlogo.org/brazil/terraviva-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/TERRAVIVA/index.m3u8",
        "quality": "HD · 1080x720"
      },
      {
        "url": "https://9ada494d.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfVXBseW5rLU5ld2NvX0hMUw/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/TERRAVIVA/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_88_terra_viva"
  },
  {
    "name": "Woohoo",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/woohoo.png",
    "sources": [
      {
        "url": "http://45.162.64.114/WOOHOO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTUzLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://168.197.104.22/WOOHOO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/WOOHOO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103449.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72436.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72437.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72438.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103449.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72435.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72436.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72437.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72438.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/125448.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9224.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72437.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTU0Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTU1Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_89_woohoo"
  },
  {
    "name": "ESPN 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/espn3.png",
    "sources": [
      {
        "url": "http://138.204.86.4:8080/ESPN3_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/aca83578cae37dbea69ce93da97efa5f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/espn3/espn3.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://16-5-0-235.sslip.io/espn3/index.m3u8"
      },
      {
        "url": "http://181.78.197.59:8000/play/a081/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460189.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460190.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103504.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71907.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71909.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71910.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103504.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71907.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71909.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71910.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81588.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13520.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8788.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131132.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8787.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30073.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30074.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71907.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTI3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTI2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTI4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_90_espn_3"
  },
  {
    "name": "TV Gazeta",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-gazeta.png",
    "sources": [
      {
        "url": "http://45.162.64.114/GAZETA/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.162.64.114/TV_GAZETA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/GAZETA/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/67852.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU5MDExLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://video08.logicahost.com.br/tvc21/tvc21/chunklist_w930922724.m3u8"
      }
    ],
    "id": "ch_91_tv_gazeta"
  },
  {
    "name": "Record News",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/recordnews.png",
    "sources": [
      {
        "url": "http://45.162.64.114/RECORD_NEWS/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://rnw-rn-samsungtvplus.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=5431",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/record-news",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDc2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://rnw-rn.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/RECORD_NEWS/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178523.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72271.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178522.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72272.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72273.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178523.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72271.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178522.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72272.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72273.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9058.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9057.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30170.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://rnw-rn-soultv.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDc3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDc4Lm0zdTg.m3u8",
        "quality": "SD"
      },
      {
        "url": "https://run-rnw-rn.otteravision.com/rnw/rn/rnw_rn_720p_high.m3u8"
      }
    ],
    "id": "ch_92_record_news"
  },
  {
    "name": "Canção Nova",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/cancaonova.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/1cb75bb4be68b0dc0dd73008d7a35faa/cancaonova.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/cancao-nova",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/CANCAO_NOVA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/cancaonova/cancaonova.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://46.151.196.223:14225",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://5c65286fc6ace.streamlock.net/cancaonova/CancaoNova.stream_720p/playlist.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://168.197.104.22/CANCAO_NOVA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72404.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72404.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/117823.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/117824.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTY4Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_93_can%C3%A7%C3%A3o_nova"
  },
  {
    "name": "TV Aparecida",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-aparecida.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-9716/LVW9716_HbtQtezcaw/playlist.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/aparecida",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/TV_APARECIDA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/aparecida/aparecida.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://45.177.114.115/TV_APARECIDA_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/TV_APARECIDA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103464.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72395.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72396.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72397.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103464.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72394.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72395.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72396.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72397.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/66680.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30147.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://cdn.jmvstream.com/w/LVW-9716/LVW9716_HbtQtezcaw/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTc5Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_94_tv_aparecida"
  },
  {
    "name": "Rede Vida",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/redevida.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f0a68c15591a6aac1f8c46bd4455c771/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/redevida/redevida.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://46.151.196.223:14244",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/REDE_VIDA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/rede_vida/index.m3u8",
        "quality": "SD · 720x576"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103475.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72293.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72295.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72296.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103475.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72293.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72295.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72296.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69259.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9076.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index_1.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTc1Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_95_rede_vida"
  },
  {
    "name": "Discovery ID",
    "category": "Documentários",
    "logo": "https://mondrian.claro.com.br/channels/inverse/investigacao-discovery.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/66aef9f85005844bd5ef797a080b44e7/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/discoveryid.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://45.162.64.114/DISCOVERY_ID/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoveryid/discoveryid.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://138.204.86.4:8080/ID_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297949.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297950.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72150.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72151.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72152.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72153.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72150.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72151.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72152.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72153.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91403.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8932.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8933.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8934.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30172.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_96_discovery_id"
  },
  {
    "name": "Fish TV",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/fish-tv.png",
    "sources": [
      {
        "url": "http://45.162.64.114/FISH_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTAyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://168.197.104.22/FISH_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/FISH_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103502.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71928.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71931.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103502.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71928.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71930.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71931.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8807.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8808.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71928.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTA0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_97_fish_tv"
  },
  {
    "name": "Box Kids TV",
    "category": "Infantil",
    "logo": "https://www.tvlogo.org/brazil/box-kids-tv-br.png",
    "sources": [
      {
        "url": "http://170.83.49.66:8083/BOXKIDSHD/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_98_box_kids_tv"
  },
  {
    "name": "X Sports",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/xsports.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/ab55903cd13c40853a7fead247e75e80/xsports.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/xsports",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b4edce3e3781b488a30d3381ed70c596/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/xsports.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/142daec49214213d83df632a3ae41d10/xsports.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/xsports",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/xsports/xsports.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460262.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460263.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/340450.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/340451.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/340449.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/340450.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/340451.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/631630.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/631631.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/340450.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTgxMTcyOS5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_99_x_sports"
  },
  {
    "name": "N SPORTS",
    "category": "Jogos & Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/nsports.png",
    "sources": [
      {
        "url": "https://ogc-nsprt-tcl-roku-syndication.otteravision.com/ogc/nsprt/nsprt.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460165.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460166.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU3ODA4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://ogc-nsprt-tcl-roku-syndication.otteravision.com/ogc/nsprt/nsprt_720p.m3u8"
      }
    ],
    "id": "ch_100_n_sports"
  },
  {
    "name": "Music Box Brazil",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/musicboxbrazil.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjE4NC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://168.197.104.22/MUSIC/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/MUSICBOXBRASILHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDM0ODcubTN1OA.m3u8",
        "quality": "4K"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjE4Ni5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjE4Ny5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103487.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72184.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72185.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72186.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72187.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103487.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72184.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72185.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72186.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72187.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72184.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_101_music_box_brazil"
  },
  {
    "name": "Band SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/band.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/3f1c855b96d44f101844fe6c0f3a4169/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/bandsp/bandsp.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjIwNjc5MC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324371.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324372.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104943.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72597.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/79312.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104943.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72597.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/79312.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107926.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20525.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/43031.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8660.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/31029.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/79311.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvOTgxNzcyLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjIwNjc4OS5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_102_band_sp"
  },
  {
    "name": "Band RS",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324368.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/72575.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvODE2MDI2Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_103_band_rs"
  },
  {
    "name": "SBT SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/sbt.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/6482664b5e9285db5996ad4185782f54/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sbtsp/sbtsp.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83Nzk2My5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324307.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324308.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjU5OC5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83Nzk2NC5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/77963.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104939.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72598.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/77964.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/77963.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104939.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72598.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/77964.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/77963.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_104_sbt_sp"
  },
  {
    "name": "Record SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/2512c21ec640403f7e9cd87e2ea3e0f7/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/recordsp/recordsp.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324389.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/77654.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72973.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/96522.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/77654.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72973.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/96522.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/82755.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9068.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/12888.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/38065.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_105_record_sp"
  },
  {
    "name": "Canal Rural",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/canal-rural-br.png",
    "sources": [
      {
        "url": "http://170.83.49.66:8083/CANALRURALHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/canal_rural/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178516.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178512.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178515.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178513.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71823.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178514.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178516.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178512.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178515.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178513.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71823.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178514.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/178512.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDY0Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_106_canal_rural"
  },
  {
    "name": "Agro Mais",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/agro-mais-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/AGROMAIS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTc2NC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://45.177.114.115/agromais/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.177.114.115/AGROMAIS_HD/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDM1MzIubTN1OA.m3u8",
        "quality": "4K"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTc2Ni5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MTc2Ny5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71764.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71765.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71766.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71767.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71764.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71765.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71766.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71767.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71764.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_107_agro_mais"
  },
  {
    "name": "CNT",
    "category": "TV Aberta",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/rede-cnt-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/CNT/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/CNT/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/REDECNTHD/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_108_cnt"
  },
  {
    "name": "TV Pai Eterno",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/tvpaieterno.png",
    "sources": [
      {
        "url": "https://video09.logicahost.com.br/paieterno/paieterno/playlist.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/tv-pai-eterno",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/895d4048b0486a18da15f15e91c18589/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://45.162.64.114/TV_PAI_ETERNO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/tvpaieterno/tvpaieterno.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/TV_PAI_ETERNO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72214.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72213.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72214.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1165872.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://video09.logicahost.com.br/paieterno/paieterno/chunklist_w1610240856.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTg2Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_109_tv_pai_eterno"
  },
  {
    "name": "PlayTV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/Ikrj3lk.png",
    "sources": [
      {
        "url": "http://45.162.64.114/PLAY_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://isaocorp.cloudecast.com/playtv/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.177.114.115/PLAY_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzEyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_110_playtv"
  },
  {
    "name": "Rede Brasil",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/TXJKwzZ.png",
    "sources": [
      {
        "url": "https://redebrasil.nuvemplay.live/hls/stream.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEwODc3NS5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/playlist.m3u8"
      }
    ],
    "id": "ch_111_rede_brasil"
  },
  {
    "name": "Rede Gospel",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/rede-gospel-br.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://redegospel-aovivo.nuvemplay.live/hls/stream.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.177.114.115/REDE_GOSPEL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178531.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104929.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104932.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104930.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104931.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178531.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104929.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104932.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104930.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104931.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9069.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMjEzNDk4Mi5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_112_rede_gospel"
  },
  {
    "name": "Trace Brazuca",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/trace-brazuca.png",
    "sources": [
      {
        "url": "https://amg01131-tracetv-tracebrazuca-xiaomi-vvr19.amagi.tv/playlist/amg01131-tracetv-tracebrazuca-xiaomi/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM4Ni5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDM0NTMubTN1OA.m3u8",
        "quality": "4K"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM4OC5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM4OS5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103453.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72386.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72387.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72388.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72389.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103453.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72386.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72387.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72388.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72389.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72386.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_113_trace_brazuca"
  },
  {
    "name": "TV Câmara",
    "category": "TV Aberta",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/tv-camara-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/TV_CAMARA/index.m3u8",
        "quality": "SD · 718x480"
      },
      {
        "url": "https://stream3.camara.gov.br/tv1/manifest.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://168.197.104.22/TV_CAMARA/index.m3u8",
        "quality": "SD · 718x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69905.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDgwLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_114_tv_c%C3%A2mara"
  },
  {
    "name": "TV Evangelizar",
    "category": "Variedades",
    "logo": "https://i.imgur.com/IrYR7Kp.png",
    "sources": [
      {
        "url": "http://45.162.64.114/EVANGELIZAR/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/EVANGELIZAR/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/TV_EVANGELIZAR/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69257.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTgyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_115_tv_evangelizar"
  },
  {
    "name": "TV Justiça",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-justica.png",
    "sources": [
      {
        "url": "http://45.162.64.114/TV_JUSTICA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/TV_JUSTICA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/TV_JUSTICA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69907.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzI2Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_116_tv_justi%C3%A7a"
  },
  {
    "name": "TV Novo Tempo",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/novo-tempo-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/NOVO_TEMPO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://streamtv.novotempo.com/CDN-TV-PT/smil:tvnovotempo.smil/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/NOVO_TEMPO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/novo_tempo/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103459.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72408.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72409.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72410.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72411.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103459.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72408.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72409.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72410.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72411.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72408.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQwNTg0Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_117_tv_novo_tempo"
  },
  {
    "name": "TV Senado",
    "category": "TV Aberta",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/tv-senado-br.png",
    "sources": [
      {
        "url": "http://45.162.64.114/TV_SENADO/index.m3u8",
        "quality": "SD · 718x480"
      },
      {
        "url": "http://168.197.104.22/TV_SENADO/index.m3u8",
        "quality": "SD · 718x480"
      },
      {
        "url": "http://170.83.16.50/TV_SENADO/index.m3u8",
        "quality": "HD · 1310x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69027.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDg0Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_118_tv_senado"
  },
  {
    "name": "RIT",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/rit-br.png",
    "sources": [
      {
        "url": "https://acesso.ecast.site:3648/live/ritlive.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.177.114.115/RIT_TV/index.m3u8",
        "quality": "HD · 1080x720"
      },
      {
        "url": "http://170.83.49.66:8083/RITHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://stream.ecast.com.br/rit-tv/tracks-v1a1/mono.m3u8"
      }
    ],
    "id": "ch_119_rit"
  },
  {
    "name": "Discovery Home & Health",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoveryhh.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/discoveryhh.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://45.162.64.114/DISCOVERY_H_H/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoveryhh/discoveryhh.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/ece60d9c347f933fa902bf2b6f53de49/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297939.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297940.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297941.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324382.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518553.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518554.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518555.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90251.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71867.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71868.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71869.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71870.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90251.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71867.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71868.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71869.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71870.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91397.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20757.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8739.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8740.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93902.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30149.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_120_discovery_home_%26_health"
  },
  {
    "name": "Canal Agro",
    "category": "Variedades",
    "logo": "",
    "sources": [
      {
        "url": "http://45.162.64.114/AGRO_CANAL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aovivo.equipea.com.br:5443/aovivort/streams/pshRLrnv6isXq7RG4747567774043229.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/AGRO_CANAL/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_121_canal_agro"
  },
  {
    "name": "Blits TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/FO4QTRf.jpeg",
    "sources": [
      {
        "url": "https://stmv1.transmissaodigital.com/blitstv/blitstv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_122_blits_tv"
  },
  {
    "name": "CNBC",
    "category": "Notícias",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/united-states/cnbc-us.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvOTg2NjMyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_123_cnbc"
  },
  {
    "name": "Com Brasil",
    "category": "Variedades",
    "logo": "https://i.imgur.com/GrjGwKM.png",
    "sources": [
      {
        "url": "https://br5093.streamingdevideo.com.br/abc/abc/playlist.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/com-brasil",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dfr80qz435crc.cloudfront.net/EFGH/Amagi/NewCo/New_Brasil_BR/New_Brasil.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_124_com_brasil"
  },
  {
    "name": "SESC TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/Mu8O6CV.png",
    "sources": [
      {
        "url": "http://45.162.64.114/SESC_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/SESCTVHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/sesc_tv/index.m3u8",
        "quality": "SD · 720x576"
      }
    ],
    "id": "ch_125_sesc_tv"
  },
  {
    "name": "TVideoNews",
    "category": "Notícias",
    "logo": "https://i.imgur.com/vstHOYx.png",
    "sources": [
      {
        "url": "https://video01.logicahost.com.br/tvideonews/tvideonews/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://video01.logicahost.com.br/tvideonews/tvideonews/chunklist_w1659802033.m3u8"
      }
    ],
    "id": "ch_126_tvideonews"
  },
  {
    "name": "Assombrações",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/620d1512c7986a0007220213/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-620d1512c7986a0007220213.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_127_assombra%C3%A7%C3%B5es"
  },
  {
    "name": "Bob Esponja Calça Quadrada",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/62545c0b002f4b0007688b61/colorLogoPNG.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138065.m3u8",
        "quality": "HD · 1280x962"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138066.m3u8",
        "quality": "SD · 704x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138067.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138068.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138069.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138070.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138071.m3u8",
        "quality": "SD · 720x540"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138072.m3u8",
        "quality": "SD · 720x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138073.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138074.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138075.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://jmp2.uk/plu-62545c0b002f4b0007688b61.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzgwNjUubTN1OA.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138065.m3u8",
        "quality": "HD · 1280x962"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138066.m3u8",
        "quality": "SD · 704x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138067.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138068.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138069.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138070.m3u8",
        "quality": "HD · 1280x972"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138071.m3u8",
        "quality": "SD · 720x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138072.m3u8",
        "quality": "SD · 720x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138073.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138074.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138075.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_128_bob_esponja_cal%C3%A7a_quadrada"
  },
  {
    "name": "Boruto: Naruto Next Generations",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/656f389c3944b60008e5bdab/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-656f389c3944b60008e5bdab.m3u8",
        "quality": "SD · 1216x684"
      }
    ],
    "id": "ch_129_boruto%3A_naruto_next_generations"
  },
  {
    "name": "Canal Educacao",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/OOB7nrS.png",
    "sources": [
      {
        "url": "http://45.162.64.114/CANAL_EDUCACAO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://canaleducacao-stream.ebc.com.br/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/CANAL_EDUCACAO/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_130_canal_educacao"
  },
  {
    "name": "Canal Futura",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/LgynEBC.png",
    "sources": [
      {
        "url": "http://45.162.64.114/FUTURA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/FUTURA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/futura/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71962.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_131_canal_futura"
  },
  {
    "name": "Canal Gov",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/rHPY0Yv.png",
    "sources": [
      {
        "url": "https://canalgov-stream.ebc.com.br/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://45.177.114.115/TV_BRASIL_2/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://168.197.104.22/TV_BRASIL_2/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzAzLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_132_canal_gov"
  },
  {
    "name": "Canal UOL",
    "category": "Notícias",
    "logo": "https://conteudo.imguol.com.br/c/play/logo_canaluol_2024.svg",
    "sources": [
      {
        "url": "https://video24.mais.uol.com.br/live/6146.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://45.185.11.126:8000/play/a0a4/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_133_canal_uol"
  },
  {
    "name": "Canal do Boi",
    "category": "Variedades",
    "logo": "https://i.imgur.com/pVM5MhS.png",
    "sources": [
      {
        "url": "http://45.162.64.114/CANAL_DO_BOI/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/CANAL_DO_BOI/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/CANAL_DO_BOI/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71820.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71821.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71822.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71820.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71822.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/89852.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71820.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDYzLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_134_canal_do_boi"
  },
  {
    "name": "Chef TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/UYksTee.png",
    "sources": [
      {
        "url": "http://168.197.104.22/CHEF_TV/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_135_chef_tv"
  },
  {
    "name": "Cultura Fast",
    "category": "TV Aberta",
    "logo": "",
    "sources": [
      {
        "url": "https://fpa-gateway.tvcultura.com.br:8181/memfs/606caef0-a290-413d-9f1f-8fcdb3a73831.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_136_cultura_fast"
  },
  {
    "name": "DumDum",
    "category": "Infantil",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c0/DumDum_logo.svg",
    "sources": [
      {
        "url": "http://45.162.64.114/ZOOMOO_KIDS/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://168.197.104.22/ZOOMOO/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://186.219.52.187/zoomoo/index.m3u8",
        "quality": "SD · 720x576"
      },
      {
        "url": "http://45.185.11.126:8000/play/a078/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDM2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDM3Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_137_dumdum"
  },
  {
    "name": "Futura",
    "category": "TV Aberta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Canal_Futura.png/960px-Canal_Futura.png",
    "sources": [
      {
        "url": "http://168.197.104.22/FUTURA/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/FUTURAHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103499.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71962.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71963.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71964.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71965.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103499.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71962.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71963.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71964.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71965.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71962.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDY5Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_138_futura"
  },
  {
    "name": "KpopTV Play",
    "category": "Variedades",
    "logo": "https://i.imgur.com/Tf0vweF.png",
    "sources": [
      {
        "url": "https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_139_kpoptv_play"
  },
  {
    "name": "MTV Biggest Pop",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/6047fbdbbb776a0007e7f2ff/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-6047fbdbbb776a0007e7f2ff.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_140_mtv_biggest_pop"
  },
  {
    "name": "MTV Rocks",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/66a01e07d2d50d0008100d6a/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-66a01e07d2d50d0008100d6a.m3u8",
        "quality": "SD · 1216x684"
      }
    ],
    "id": "ch_141_mtv_rocks"
  },
  {
    "name": "MasterChef",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/6077045b6031bd00078de127/colorLogoPNG_1785430539950.png",
    "sources": [
      {
        "url": "https://amg00627-amg00627c9-runtime-latam-2613.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00627-banijayfast-masterchefbrazil-runtimelatam/cb543d167c6c618784cb3760cef342a0f94b1fde1d6988693eb5518975d1073edce2a59caa08ff16388f1ede7f0a66413a3e951fda77118fd87eb141453c5728cfffe729a2c05616b7db083429b56a062a866a68ac39437ed0e21f48a238b6720a5aa82a66443d80b846ac7352db80148b61299bce8c37683f03409a5e5afba358b38ab50a5ad969a1af1c56953145f59647c0dd4ebdd4d20883448e7fa7099c93a68ace42d381c77efc02b036510f7a2fc98528cbfbb5d7b0eb01b321c2493c7c77d4e1f5dc5c3d9c4e4f2e8095a98c448fdd4a1447fb0d04b4158c47c411876eb800a4e034d1c52c03f0204bcef7f8a228e0d5a19ff73a71c90e6a7e5bbc011eaac66e1174c86298122a2d9cf28173eea645c7e673d5e62e7559b158362bb90a43b810f4f8fc9ba8aec6bf9d083f4209079454a19b22e828d24798cf062d5377e3ccf048e989c3573c6e4ec9d5108453538ed28587d019288a4e2f1ab930970b5e2cfb3d622ab176b9826a38c0662b952531fe6f308269f5ac63a0f48cab556df596ec6acb42c3f94adeff09ac2d1b5c01b8fd651f66446fdfe36342612c930bb49d9aaf274933edf1ccecc91c6d546e59015acbc7e377d4df957953468f03683006657dfc33df67db0f5e136e984ea1cb2740c5577163b6dd703733419fcba38e94d9cc50c716fec6fe2b20285665a9496b036ad4b3cd14bd0f42707e52971c262499024949fe9ad9effad13a9b7c05109ca8a6054b0f3f8d3f8d662d6d5d57dc5c82626e/145/1920x1080_6046040/index.m3u8"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/masterchef/masterchef.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_142_masterchef"
  },
  {
    "name": "MyTime Movie Network",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/aiGQtzI.png",
    "sources": [
      {
        "url": "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_143_mytime_movie_network"
  },
  {
    "name": "NickOnline",
    "category": "Infantil",
    "logo": "https://x1colegal.com/logo.png",
    "sources": [
      {
        "url": "https://x1colegal.com/hls/stream.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://x1colegal.com/hls/0/stream.m3u8"
      }
    ],
    "id": "ch_144_nickonline"
  },
  {
    "name": "NickToons Brasil",
    "category": "Infantil",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nicktoons_logo_%282023%29.svg/330px-Nicktoons_logo_%282023%29.svg.png",
    "sources": [
      {
        "url": "https://stmv2.srvif.com/nicktoons/nicktoons/playlist.m3u8",
        "quality": "SD · 854x480"
      }
    ],
    "id": "ch_145_nicktoons_brasil"
  },
  {
    "name": "Nickelodeon",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/nickelodeon.png",
    "sources": [
      {
        "url": "https://stmv2.srvif.com/gafeab/gafeab/playlist.m3u8",
        "quality": "SD · 854x480"
      }
    ],
    "id": "ch_146_nickelodeon"
  },
  {
    "name": "Nickelodeon iCarly",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/620ff46e0a576e0007dc2f89/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-620ff46e0a576e0007dc2f89.m3u8",
        "quality": "SD · 1216x684"
      }
    ],
    "id": "ch_147_nickelodeon_icarly"
  },
  {
    "name": "Pluto TV Anime",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/5f12136385bccc00070142ed/colorLogoPNG_1785430875394.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-5f12136385bccc00070142ed.m3u8",
        "quality": "SD · 1216x684"
      }
    ],
    "id": "ch_148_pluto_tv_anime"
  },
  {
    "name": "Rede TV!",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/ZJgD38F.png",
    "sources": [
      {
        "url": "http://45.162.64.114/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/playlist.m3u8",
        "quality": "FHD · 1920x1080",
        "referer": "https://meufut.top/rede-tv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://168.197.104.22/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.16.50/REDE_TV/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/chunklist_w1074634538.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDczLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_149_rede_tv!"
  },
  {
    "name": "Runtime",
    "category": "Filmes e Séries",
    "logo": "https://images.pluto.tv/channels/62c5d32e2c48f9000715b6e9/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2153",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_150_runtime"
  },
  {
    "name": "Smithsonian Channel Pluto TV",
    "category": "Variedades",
    "logo": "https://images.pluto.tv/channels/6298bd10d88ef000073f16b7/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://jmp2.uk/plu-6298bd10d88ef000073f16b7.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_151_smithsonian_channel_pluto_tv"
  },
  {
    "name": "Travel Box Brazil",
    "category": "Variedades",
    "logo": "https://i.imgur.com/3tBJERH.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM5MC5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://168.197.104.22/TRAVEL_BOX_BRASIL/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://170.83.49.66:8083/TRAVELBOXHD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDM0NTIubTN1OA.m3u8",
        "quality": "4K"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM5Mi5tM3U4.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjM5My5tM3U4.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72391.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72392.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72393.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72390.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72391.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72392.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72393.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72393.m3u8",
        "quality": "SD · 852x480"
      }
    ],
    "id": "ch_152_travel_box_brazil"
  },
  {
    "name": "AEROPORTO AREA RESTRITA",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/150488.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/150489.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/150490.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/2945300.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xNTA0ODgubTN1OA.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/150488.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/150489.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/150490.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_153_aeroporto_area_restrita"
  },
  {
    "name": "FILHINHO DA MAMAE",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/2945301.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_154_filhinho_da_mamae"
  },
  {
    "name": "Amazon Prime Video 01",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/primevideo.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/primevideo/primevideo.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460179.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/292698.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_155_amazon_prime_video_01"
  },
  {
    "name": "Amazon Prime Video 02",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/primevideo.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/primevideo2/primevideo2.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460180.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/121180.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_156_amazon_prime_video_02"
  },
  {
    "name": "Amazon Prime Video 03",
    "category": "Jogos & Esportes",
    "logo": "http://www.fontedecanais.gs/logos/canais/primevideo.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460181.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_157_amazon_prime_video_03"
  },
  {
    "name": "Canal GOAT (Jogo 1)",
    "category": "Jogos & Esportes",
    "logo": "http://logos.appscms.xyz/logos/2025/canalgoat.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460243.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_158_canal_goat_(jogo_1)"
  },
  {
    "name": "Canal GOAT (Jogo 2)",
    "category": "Jogos & Esportes",
    "logo": "http://logos.appscms.xyz/logos/2025/canalgoat.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460244.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_159_canal_goat_(jogo_2)"
  },
  {
    "name": "Canal GOAT (Jogo 3)",
    "category": "Jogos & Esportes",
    "logo": "http://logos.appscms.xyz/logos/2025/canalgoat.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460245.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_160_canal_goat_(jogo_3)"
  },
  {
    "name": "Combate",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/combate.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/7d57bfa6e9334f879ac96923e91f97f4/combate.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/combate",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c269edc69ec6a971ebf980eab5ffdf0e/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/a223f90f63881dde78c7f0bb46488689/combate.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/combate",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/combate/combate.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://16-5-0-235.sslip.io/combate/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTE0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297542.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297543.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297544.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71844.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71842.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71843.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71845.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71846.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71844.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71842.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71843.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71845.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71846.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/81586.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13506.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8714.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8716.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30066.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30067.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71846.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTE1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTE2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_161_combate"
  },
  {
    "name": "DAZN (Jogo 1)",
    "category": "Jogos & Esportes",
    "logo": "http://logos.appscms.xyz/logos/2025/dazn.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460239.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_162_dazn_(jogo_1)"
  },
  {
    "name": "DAZN (Jogo 4)",
    "category": "Jogos & Esportes",
    "logo": "http://logos.appscms.xyz/logos/2025/dazn.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460242.m3u8",
        "quality": "SD · 640x360"
      }
    ],
    "id": "ch_163_dazn_(jogo_4)"
  },
  {
    "name": "Disney+ 01",
    "category": "Jogos & Esportes",
    "logo": "http://www.fontedecanais.me/logos/canais/disneyplus.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169096.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_164_disney%2B_01"
  },
  {
    "name": "Disney+ 02",
    "category": "Jogos & Esportes",
    "logo": "http://www.fontedecanais.me/logos/canais/disneyplus.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169098.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_165_disney%2B_02"
  },
  {
    "name": "NBA 01",
    "category": "Jogos & Esportes",
    "logo": "http://www.fontedecanais.me/logos/canais/nba.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/514097.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_166_nba_01"
  },
  {
    "name": "N Sports (Jogo 1)",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/nsports.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460254.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_167_n_sports_(jogo_1)"
  },
  {
    "name": "Paramount+ (Jogo 1)",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/paramountplus.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d167ace822e2ab6c2dffe84fe531f854/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460273.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_168_paramount%2B_(jogo_1)"
  },
  {
    "name": "Paramount+ (Jogo 2)",
    "category": "Jogos & Esportes",
    "logo": "https://www.fontedecanais.gs/logos/canais/paramountplus.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460172.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_169_paramount%2B_(jogo_2)"
  },
  {
    "name": "Paramount+ (Jogo 3)",
    "category": "Jogos & Esportes",
    "logo": "https://www.fontedecanais.gs/logos/canais/paramountplus.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460173.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_170_paramount%2B_(jogo_3)"
  },
  {
    "name": "Paramount+ (Jogo 6)",
    "category": "Jogos & Esportes",
    "logo": "https://logos.appscms.xyz/logos/2025/Paramount.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460278.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_171_paramount%2B_(jogo_6)"
  },
  {
    "name": "SportyNet 01",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a4902683ba7d47f944a3d8987447f169/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460158.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460269.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184572.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184569.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184573.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184570.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184571.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184572.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184573.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184571.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_172_sportynet_01"
  },
  {
    "name": "UFC Fight Pass 01",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/ufcfightpass.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297545.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f8e7528d650ddf40f813ff09721ef3a6/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297548.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2403505.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_173_ufc_fight_pass_01"
  },
  {
    "name": "UFC Fight Pass 03",
    "category": "Jogos & Esportes",
    "logo": "http://logos.imperioapps.top/UFC_FIGHT_PASS.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297547.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/297550.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_174_ufc_fight_pass_03"
  },
  {
    "name": "Canal Brasil",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/canalbrasil.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzAyLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103518.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71816.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71817.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71818.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71819.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103518.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71816.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71817.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71818.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71819.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107979.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71816.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzAzLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzA0Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_175_canal_brasil"
  },
  {
    "name": "Cine SKY 01",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.dev/logos/canais/cinesky.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13071.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_176_cine_sky_01"
  },
  {
    "name": "Cine SKY 02",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.org/logos/canais/cinesky.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13072.m3u8",
        "quality": "HD · 1920x804"
      }
    ],
    "id": "ch_177_cine_sky_02"
  },
  {
    "name": "Cine SKY 03",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.org/logos/canais/cinesky.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13073.m3u8",
        "quality": "HD · 1920x800"
      }
    ],
    "id": "ch_178_cine_sky_03"
  },
  {
    "name": "Cine SKY 05",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.org/logos/canais/cinesky.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13075.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_179_cine_sky_05"
  },
  {
    "name": "Lifetime",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.me/logos/canais/lifetime.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTE0Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518571.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518572.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518573.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103492.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72154.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72155.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72156.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72157.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103492.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72154.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72155.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72156.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72157.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8943.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8944.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13538.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72154.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTE1Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTE2Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_180_lifetime"
  },
  {
    "name": "MAX 01",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.gs/logos/canais/max.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460233.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/max1/max1.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594007.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_181_max_01"
  },
  {
    "name": "MAX 02",
    "category": "Filmes e Séries",
    "logo": "http://www.fontedecanais.gs/logos/canais/max.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/3460234.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/max2/max2.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594010.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTgyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_182_max_02"
  },
  {
    "name": "Studio Universal",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/studiouniversal.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c4982046a69006ed190cad060acd88a4/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/studiouniversal/studiouniversal.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzM3Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324392.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103467.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72334.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72335.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72336.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72337.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103467.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72334.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72335.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72336.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72337.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/108183.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9115.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9117.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72334.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzM4Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MzM5Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_183_studio_universal"
  },
  {
    "name": "Gloob",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/gloob.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/edb0d7b92ee7ce5d95d97aa1590706de/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/gloob/gloob.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDE1Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882625.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882626.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882627.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131153.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72099.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72100.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131117.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131153.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72099.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72100.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131117.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13526.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8888.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8887.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/131153.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDE2Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDE3Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_184_gloob"
  },
  {
    "name": "Gloobinho",
    "category": "Infantil",
    "logo": "https://logos.imperioapps.top/GLOBINHO.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDE5Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882628.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882629.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882630.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103497.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90631.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90630.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/90629.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131173.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103497.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90631.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90630.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/90629.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131173.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69036.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/69037.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/90631.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDIwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NDIxLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_185_gloobinho"
  },
  {
    "name": "TV Rá Tim Bum",
    "category": "Infantil",
    "logo": "https://logos.imperioapps.top/TV_RA_TIM_BUM.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882634.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882635.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/1882636.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103458.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72412.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72413.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72414.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72415.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103458.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72412.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72413.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72414.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72415.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9193.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72412.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzQ0OTgyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_186_tv_r%C3%A1_tim_bum"
  },
  {
    "name": "Band Campinas",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324352.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324353.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20522.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_187_band_campinas"
  },
  {
    "name": "Band Curitiba",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324354.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324355.m3u8",
        "quality": "SD · 854x480"
      }
    ],
    "id": "ch_188_band_curitiba"
  },
  {
    "name": "Band MG",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324359.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324361.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_189_band_mg"
  },
  {
    "name": "Band Pará",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324362.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_190_band_par%C3%A1"
  },
  {
    "name": "Band Recife TV Tribuna",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324364.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324365.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_191_band_recife_tv_tribuna"
  },
  {
    "name": "Band RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/band.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f41e6cefa7867e5419e4c64e0e6ce0ff/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/bandrj/bandrj.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324366.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/20524.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_192_band_rj"
  },
  {
    "name": "Band RN",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324367.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTgwNTM5NC5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_193_band_rn"
  },
  {
    "name": "Band Sergipe",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324370.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_194_band_sergipe"
  },
  {
    "name": "Rede Família",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.gs/logos/canais/redefamilia.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzE3Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_195_rede_fam%C3%ADlia"
  },
  {
    "name": "SBT Alterosa",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324287.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72621.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/218366.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72621.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/218366.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_196_sbt_alterosa"
  },
  {
    "name": "SBT BA",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324288.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-9359/LVW9359_XSyReL0QVf/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_197_sbt_ba"
  },
  {
    "name": "SBT GO",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324291.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_198_sbt_go"
  },
  {
    "name": "SBT Londrina",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324312.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_199_sbt_londrina"
  },
  {
    "name": "SBT Maringá",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324311.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_200_sbt_maring%C3%A1"
  },
  {
    "name": "SBT MG",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324296.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324310.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_201_sbt_mg"
  },
  {
    "name": "SBT PI",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324309.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131432.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_202_sbt_pi"
  },
  {
    "name": "SBT PR",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/sbt.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324301.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/88432.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_203_sbt_pr"
  },
  {
    "name": "SBT RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/sbt.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/9ea3501e9658e2f75a3cecd8d3836029/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sbtrj/sbtrj.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDg2ODEubTN1OA.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324302.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324303.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDg2ODIubTN1OA.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMDg2ODMubTN1OA.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/108681.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/108683.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/108681.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/108682.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/108683.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/131563.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/35844.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/108682.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_204_sbt_rj"
  },
  {
    "name": "TVE Bahia",
    "category": "TV Aberta",
    "logo": "http://i.imgur.com/IWGyp65.jpeg",
    "sources": [
      {
        "url": "http://streaming.procergs.com.br:1935/tve/stve/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTQ0NjcyMS5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_205_tve_bahia"
  },
  {
    "name": "Tv Goiania",
    "category": "TV Aberta",
    "logo": "http://www.fontedecanais.me/logos/canais/band.png",
    "sources": [
      {
        "url": "http://64.31.23.207:80/59471019/60849037/324373.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_206_tv_goiania"
  },
  {
    "name": "BIS",
    "category": "Variedades",
    "logo": "http://www.fontedecanais.me/logos/canais/bis.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDkwLm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518551.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518552.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103527.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71806.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71807.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71808.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71809.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103527.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71806.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71807.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71808.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71809.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/107985.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13502.m3u8",
        "quality": "SD · 852x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8680.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8681.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a07w/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDkxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDkyLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_207_bis"
  },
  {
    "name": "Food Network",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/foodnetwork.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/1cabec2a5257e1af7f711a4c7fd32a1e/foodnetwork.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/foodnetwork",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/foodnetwork.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/8975189bb51c75df99a767cdecf542d0/foodnetwork.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/foodnetwork",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a4d27fa6b4dda06ffbb8588a8a6d0a72/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/foodnetwork/foodnetwork.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTA2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518566.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518567.m3u8",
        "quality": "SD · 768x432"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103501.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71932.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71933.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71934.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71935.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103501.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71932.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71933.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71934.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71935.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13522.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8811.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8810.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://45.185.11.126:8000/play/a06j/index.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTA3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTA4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_208_food_network"
  },
  {
    "name": "Modo Viagem",
    "category": "Variedades",
    "logo": "http://www.fontedecanais.me/logos/canais/modoviagem.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTE4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518575.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://64.31.23.207:80/59471019/60849037/518576.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103488.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72163.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72164.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72165.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103488.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72162.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72163.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72164.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72165.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8883.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/92649.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72164.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTE5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTIwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_209_modo_viagem"
  },
  {
    "name": "24H Chaves",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137139.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_chaves/24h_chaves.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137140.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137141.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137142.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137143.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137144.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137145.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/191facaf2db19660ead85260f17833fe/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137139.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137140.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137141.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137142.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137143.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137144.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137145.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169218.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169219.m3u8",
        "quality": "SD · 640x480"
      }
    ],
    "id": "ch_210_24h_chaves"
  },
  {
    "name": "24H Dragon Ball Z",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/52e5b4e936ba314127ebe4742e6ae12f/24h_dragonball.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/dragon-ball-z",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/97b3bd64ce4065d8d841b2172416ff45/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/f7e69dd96cbbf642e6041bc64cb8667e/24h_dragonball.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/dragon-ball-z",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_dragonball/24h_dragonball.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169226.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_211_24h_dragon_ball_z"
  },
  {
    "name": "24H Naruto Clássico",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/2b02da29160d63be1c25959087679733/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_naruto/24h_naruto.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_212_24h_naruto_cl%C3%A1ssico"
  },
  {
    "name": "24H Os Simpsons",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/2efddc40d3e9b9d781d88441ec82e8ce/24h_simpsons.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/os-simpsons",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/cf2512a0c0d622b2cd9aabae82f53f82/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135601.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/a9b54966fcd76b7b3266654910bb96e0/24h_simpsons.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/os-simpsons",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_simpsons/24h_simpsons.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135600.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135599.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135598.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135597.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135596.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135595.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135594.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135593.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135592.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135591.m3u8",
        "quality": "SD · 544x384"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135590.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135589.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135588.m3u8",
        "quality": "SD · 400x300"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135587.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135586.m3u8",
        "quality": "SD · 512x384"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135585.m3u8",
        "quality": "SD · 512x384"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135584.m3u8",
        "quality": "SD · 640x474"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135583.m3u8",
        "quality": "SD · 560x400"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135582.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135581.m3u8",
        "quality": "SD · 624x352"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135580.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135579.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135578.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135577.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135576.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135575.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135574.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135573.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135572.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135571.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135570.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135601.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135600.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135599.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135598.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135597.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135596.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135595.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135594.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135593.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135592.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135591.m3u8",
        "quality": "SD · 544x384"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135590.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135589.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135588.m3u8",
        "quality": "SD · 400x300"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135587.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135586.m3u8",
        "quality": "SD · 512x384"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135585.m3u8",
        "quality": "SD · 512x384"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135584.m3u8",
        "quality": "SD · 640x474"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135583.m3u8",
        "quality": "SD · 560x400"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135582.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135581.m3u8",
        "quality": "SD · 624x352"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135580.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135579.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135578.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135577.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135576.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135575.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135574.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135573.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135572.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135571.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135570.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169244.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_213_24h_os_simpsons"
  },
  {
    "name": "24H Pica Pau",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/136821.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_picapau/24h_picapau.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/5b0e5b177ec11d09b29568ea0c7a3de5/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/136821.m3u8",
        "quality": "SD · 640x480"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/136821.m3u8",
        "quality": "SD · 640x480"
      }
    ],
    "id": "ch_214_24h_pica_pau"
  },
  {
    "name": "24H Todo Mundo Odeia o Cris",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/02bde299980d2c1a30e472930d0a76d8/24h_odeiachris.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/todo-mundo-odeia-o-cris",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135469.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/9c7232930a640d377b286e2bfa30a03e/24h_odeiachris.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/todo-mundo-odeia-o-cris",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_odeiachris/24h_odeiachris.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135470.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135471.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135472.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/1830d00b7498222e2b34831696a9869b/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135469.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135470.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135471.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135472.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169249.m3u8",
        "quality": "SD · 624x352"
      }
    ],
    "id": "ch_215_24h_todo_mundo_odeia_o_cris"
  },
  {
    "name": "24H Friends",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138814.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/24h_friends/24h_friends.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138815.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138816.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138817.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138818.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138819.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138820.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138821.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138822.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138823.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d77b9a31678546e0a1eb70374fbbd805/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138814.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138815.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138816.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138817.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138818.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138819.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138820.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138821.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138822.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138823.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_216_24h_friends"
  },
  {
    "name": "Discovery World",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/discoveryworld.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/discoveryworld.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://45.162.64.114/DISCOVERY_WORLD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/discoveryworld/discoveryworld.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://138.204.86.4:8080/DISCOVERY_WORLD_HD/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDM4Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/12071a9b4b353521e7ba660c30e4428d/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103509.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71887.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71888.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71889.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71890.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103509.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71887.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71888.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71889.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71890.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/91398.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/13513.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8758.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/8759.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/93905.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30157.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71887.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDM5Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDQwLm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_217_discovery_world"
  },
  {
    "name": "CazeTV 1",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/cazetv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d131c9322a9dbfe8ea7ff5c9fa7ea1ed/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/caze1/caze1.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/227520.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/245798.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/245797.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_218_cazetv_1"
  },
  {
    "name": "CazeTV 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/cazetv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/125ceb72d65dce89d343e6b1bcda90ec/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/caze2/caze2.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8zODQ0NjMubTN1OA.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_219_cazetv_2"
  },
  {
    "name": "PT - A Bola",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_abola.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/039811f38852528561f62c3046e6701f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_abola/pt_abola.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_220_pt_-_a_bola"
  },
  {
    "name": "PT - Benfica TV",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_benficatv.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/80019bbd22a1c4987edd7810ccf410cc/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_benficatv/pt_benficatv.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_221_pt_-_benfica_tv"
  },
  {
    "name": "PT - Canal 11",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_canal11.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/04f16dd33cbeefd803b8c58d7f927f9b/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_canal11/pt_canal11.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_222_pt_-_canal_11"
  },
  {
    "name": "PT - Eleven 1",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_eleven1.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/11495a4f12c1f88292dfce0078846221/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_eleven1/pt_eleven1.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_223_pt_-_eleven_1"
  },
  {
    "name": "PT - Eleven 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_eleven2.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/5f7e7a01290473667a2cdbd4cdf9d2a0/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_eleven2/pt_eleven2.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_224_pt_-_eleven_2"
  },
  {
    "name": "PT - Eleven 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/pt_eleven3.prev.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/4e9892ed2cd2facdf283b426f15a5dbf/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_eleven3/pt_eleven3.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_225_pt_-_eleven_3"
  },
  {
    "name": "PT - Sporttv 1",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/e5a3aab5250ee8d0be4400972cceb704/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv1/pt_sportv1.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_226_pt_-_sporttv_1"
  },
  {
    "name": "PT - Sporttv 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/640368350ec7b17351a19cf23e863e61/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv2/pt_sportv2.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_227_pt_-_sporttv_2"
  },
  {
    "name": "PT - Sporttv 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/13e7e3a1a41b29730f3b5761253d3a16/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv3/pt_sportv3.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_228_pt_-_sporttv_3"
  },
  {
    "name": "PT - Sporttv 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a9227e8e94d10a26760af844de3f328f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv4/pt_sportv4.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_229_pt_-_sporttv_4"
  },
  {
    "name": "PT - Sporttv 5",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0fecb2ec5984cc8bd303ce18e7afdbf2/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv5/pt_sportv5.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_230_pt_-_sporttv_5"
  },
  {
    "name": "PT - Sporttv 6",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c32eb4cfab719f478c533cc1d4156b4f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv6/pt_sportv6.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_231_pt_-_sporttv_6"
  },
  {
    "name": "PT - Sporttv 7",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/789019e66da5de28faa4845480861b44/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/pt_sportv7/pt_sportv7.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_232_pt_-_sporttv_7"
  },
  {
    "name": "SportyNet+ 1",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/a3644ff901247b7d612e184ac04b9436/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/184570.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU3Nzk5Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_233_sportynet%2B_1"
  },
  {
    "name": "SportyNet+ 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f9da9645ae351af80a912350a13739b8/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU3ODAwLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_234_sportynet%2B_2"
  },
  {
    "name": "SportyNet+ 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/184580.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/9c58cd0958d4771118111fb3a82590e3/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU3ODAxLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_235_sportynet%2B_3"
  },
  {
    "name": "Globo AM",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0864306316555512a8114d9e3a2af6e1/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globoam/globoam.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_236_globo_am"
  },
  {
    "name": "Globo CE",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f0d091a0016011d3c87d91ff377452ea/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globoce/globoce.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_237_globo_ce"
  },
  {
    "name": "Globo ES",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/79dea27a5437aeba56cc9cfebd304507/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globoes/globoes.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_238_globo_es"
  },
  {
    "name": "Globo GO",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/f92160390194ae37c9806bf81d31315f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globogo/globogo.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_239_globo_go"
  },
  {
    "name": "Globo PB",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/8a94b0691085966c3e82a6e2d138e70e/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globopb/globopb.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_240_globo_pb"
  },
  {
    "name": "Globo PE",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c75ec72cac11b0291256a248f108d060/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globope/globope.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_241_globo_pe"
  },
  {
    "name": "Globo RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globorj.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/431c543a298242c49342f3bfbd603873/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globorj/globorj.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://16-5-0-235.sslip.io/globorj/index.m3u8"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy83MjAyNS5tM3U4.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzExNjMubTN1OA.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8xMzExODIubTN1OA.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72025.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131163.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131182.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72025.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131163.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131182.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168919.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168920.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168921.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72025.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_242_globo_rj"
  },
  {
    "name": "Globo RS",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0e2cb283612d134c82f6650b428aa030/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globors/globors.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_243_globo_rs"
  },
  {
    "name": "Record GO",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/recordgo/recordgo.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/9fe4a5b9115ab89a51f64d481288116e/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/218823.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/218822.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/218823.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/106096.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/106097.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_244_record_go"
  },
  {
    "name": "Record MG",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/c7d142437fb572b09b99c3d15961484a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/recordmg/recordmg.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9055.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9054.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_245_record_mg"
  },
  {
    "name": "Record RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/0d95cee9d6175371148e1be107a69410/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/recordrj/recordrj.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/106095.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/71697.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9063.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_246_record_rj"
  },
  {
    "name": "HGTV",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/hgtv.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/83388f6af00a1e30e6a19d56af52fd76/hgtv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/hgtv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://dadinhodetapioca.fun/play/hgtv.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/0b7ed4f2d49df88f285464007159254d/hgtv.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/hgtv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/005e9e04035fc5202bcfbdc77215d42f/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/hgtv/hgtv.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDQ2Lm0zdTg.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103493.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72142.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72143.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72144.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72145.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103493.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72142.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72143.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72144.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72145.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304506.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304507.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/304508.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72142.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDQ3Lm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MDQ4Lm0zdTg.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_247_hgtv"
  },
  {
    "name": "MTV",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/mtv.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/b76fa08b992b542d15b3cc2505e5a44b/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/mtv/mtv.m3u8",
        "quality": "FHD · 1536x1024"
      },
      {
        "url": "https://16-5-0-235.sslip.io/mtv/index.m3u8"
      }
    ],
    "id": "ch_248_mtv"
  },
  {
    "name": "A Fazenda 18 1",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/820fef4ff510e9724f894c3b408b9a93/afazenda.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/a-fazenda-18",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/cdc44d393ff177c1b80ecf2248667bdd/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/6bcf28b4f7d5fbb81239a41192761927/afazenda.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/a-fazenda-18",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/afazenda/afazenda.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470061.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_249_a_fazenda_18_1"
  },
  {
    "name": "A Fazenda 18 2",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/2c5b175edd80868ef2d3c8c8a5cd5362/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/afazenda2/afazenda2.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470062.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_250_a_fazenda_18_2"
  },
  {
    "name": "A Fazenda 18 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d0211c7944e91ed9fd2d2dd835552a5a/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/afazenda3/afazenda3.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470063.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_251_a_fazenda_18_3"
  },
  {
    "name": "A Fazenda 18 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/560c69af814fdfb21c8df00814a4d537/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/afazenda4/afazenda4.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470064.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_252_a_fazenda_18_4"
  },
  {
    "name": "A Fazenda 18 5",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/3e4a116cb2ae9acc19d5bd9bbab7398b/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/afazenda5/afazenda5.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470065.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_253_a_fazenda_18_5"
  },
  {
    "name": "CazeTV 3",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/cazetv.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/caze3/caze3.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_254_cazetv_3"
  },
  {
    "name": "Globo DF",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/9a31ec5c099675d9db9f81ad1e6cf0a1/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globodf/globodf.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131151.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131164.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131116.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131151.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131164.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131116.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_255_globo_df"
  },
  {
    "name": "Globo MG",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://8cc92f775b4063fd8bfd2577376b0698.s25-cloudfront-net.lat/stream/d286ed1e1b23af65df45cfb8baad2c88/error.txt",
        "quality": "Qualidade não informada",
        "referer": "https://w7.embedtv.cc/",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/globomg/globomg.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131200.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131159.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/131209.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131200.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/131209.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168938.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168939.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1168940.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_256_globo_mg"
  },
  {
    "name": "MAX 03",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/max.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/max3/max3.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/594011.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1MTgzLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_257_max_03"
  },
  {
    "name": "Amazon Prime Video 04",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/primevideo.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/primevideo4/primevideo4.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_258_amazon_prime_video_04"
  },
  {
    "name": "SporTV 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportv4.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sportv4/sportv4.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yNzYwODkubTN1OA.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yNzYwOTMubTN1OA.m3u8",
        "quality": "4K"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yNzYwOTAubTN1OA.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL3BhbGRpLnBybzo4MC9saXZlL3RvbmluaG8wMi9DYjQ5ODAzNy8yNzYwOTEubTN1OA.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/276092.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/276093.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/276092.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/276093.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/570369.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_259_sportv_4"
  },
  {
    "name": "Star Channel",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/starchannel.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/starchannel/starchannel.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_260_star_channel"
  },
  {
    "name": "Curta",
    "category": "Documentários",
    "logo": "https://img.faz-o-eli.online/curta.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71855.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71856.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71857.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71858.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103512.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71855.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71856.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71857.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71858.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103512.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/12948.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71855.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_261_curta"
  },
  {
    "name": "DOG TV",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/dog-tv.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178517.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/76922.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104909.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/76923.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104908.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/76922.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104909.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/76923.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104908.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/76922.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_262_dog_tv"
  },
  {
    "name": "Eurochannel",
    "category": "Notícias",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104910.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104913.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104911.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104912.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104910.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104913.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104911.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104912.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/104910.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTc1MjMyNy5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_263_eurochannel"
  },
  {
    "name": "FashionTV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/1jtRh4S.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103503.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71924.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71925.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/71927.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103503.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71924.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71925.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71926.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/71927.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/71924.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzA3Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_264_fashiontv"
  },
  {
    "name": "Film&Arts",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/filmarts.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104914.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104920.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178518.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104915.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104916.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104914.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104920.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178518.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104915.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104916.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/104914.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzYwNzA4Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_265_film%26arts"
  },
  {
    "name": "Formula 1 TV",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvOTc3MDQwLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_266_formula_1_tv"
  },
  {
    "name": "France 24",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/france-24.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103500.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104906.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104942.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104907.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104941.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103500.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104942.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104907.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104941.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/104906.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_267_france_24"
  },
  {
    "name": "Markket",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/markket.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/164026.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/164030.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/164029.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/164028.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/164027.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/164026.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/164030.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/164029.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/164028.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/164027.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/164030.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_268_markket"
  },
  {
    "name": "NBA League Pass 1",
    "category": "Jogos & Esportes",
    "logo": "https://i.imgur.com/ynW8fZF.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140516.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140517.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140518.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140516.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140517.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140518.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/140516.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_269_nba_league_pass_1"
  },
  {
    "name": "NBA League Pass 2",
    "category": "Jogos & Esportes",
    "logo": "https://i.imgur.com/ynW8fZF.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140519.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140520.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140521.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140519.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140520.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140521.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_270_nba_league_pass_2"
  },
  {
    "name": "NBA League Pass 3",
    "category": "Jogos & Esportes",
    "logo": "https://i.imgur.com/ynW8fZF.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140522.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140523.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140524.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140522.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140523.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140524.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_271_nba_league_pass_3"
  },
  {
    "name": "SportyNet 4",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184584.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184585.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184586.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184584.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184585.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184586.m3u8",
        "quality": "SD"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzU3ODAyLm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_272_sportynet_4"
  },
  {
    "name": "SportyNet",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/sportynet.png",
    "sources": [
      {
        "url": "https://dadinhodetapioca.fun/play/sportynet.html",
        "quality": "FHD",
        "referer": "https://dadinhodetapioca.fun/"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1165167.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/sportynetplus3/sportynetplus3.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_273_sportynet"
  },
  {
    "name": "Paramount + 4",
    "category": "Variedades",
    "logo": "https://vipcanais.net/images/paramountplus.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103521.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72989.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72992.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103521.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72989.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72992.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72992.m3u8",
        "quality": "SD · 852x480"
      }
    ],
    "id": "ch_274_paramount_%2B_4"
  },
  {
    "name": "Paramount Channel",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/paramount-network.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72217.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72219.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72219.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72219.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_275_paramount_channel"
  },
  {
    "name": "Prime Box Brazil",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/primeboxbrazil.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/103476.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72267.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72268.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72269.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/72270.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/103476.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72268.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/72270.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/72269.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_276_prime_box_brazil"
  },
  {
    "name": "Sabor & Arte",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sabor-e-arte.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/112017.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/112014.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/112016.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/112015.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/112017.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/112014.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/112016.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/112015.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/112016.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTc1MjMyMC5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_277_sabor_%26_arte"
  },
  {
    "name": "UFC Fight Pass",
    "category": "Jogos & Esportes",
    "logo": "https://img.faz-o-eli.online/ufcfightpass.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/08a88b58b4cce722ea16074fd446a37c/ufcfightpass.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/ufc-fight-pass",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184046.m3u8",
        "quality": "FHD"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/36357fc78b7c6b935fe4542eecbbfa8d/ufcfightpass.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/ufc-fight-pass",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/ufcfightpass/ufcfightpass.m3u8",
        "quality": "Qualidade não informada"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184047.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/184048.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184046.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184047.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/184048.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_278_ufc_fight_pass"
  },
  {
    "name": "Zoomoo",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/zoomoo.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/178533.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104934.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104937.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104935.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/104936.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/178533.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104934.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104937.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104935.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/104936.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/9230.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/104934.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_279_zoomoo"
  },
  {
    "name": "101 Dalmatas",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/9c6a2f33abeeef86c653c2cfb53e30b3.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137614.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137614.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169265.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_280_101_dalmatas"
  },
  {
    "name": "A Beleza Secreta dos Animais",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/841daa83c5587e962d6922d8d873a7e3.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138011.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138011.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_281_a_beleza_secreta_dos_animais"
  },
  {
    "name": "Aladdin",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/07b77f17e21144dcbd7933ee82820906.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138730.m3u8",
        "quality": "SD · 630x480"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138730.m3u8",
        "quality": "SD · 630x480"
      }
    ],
    "id": "ch_282_aladdin"
  },
  {
    "name": "As Aventuras do Gato de Botas",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/10eb05c9613316dfb3cb1a39efdf13e0.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/140528.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/140528.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_283_as_aventuras_do_gato_de_botas"
  },
  {
    "name": "Cameras Escondidas Silvio Santos",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/152014.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/152014.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_284_cameras_escondidas_silvio_santos"
  },
  {
    "name": "Caverna do Dragao",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/7ba1bfdb706316720d0ba2bafbfd7347.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135454.m3u8",
        "quality": "HD · 1280x962"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135454.m3u8",
        "quality": "HD · 1280x962"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169296.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169215.m3u8",
        "quality": "HD · 960x720"
      }
    ],
    "id": "ch_285_caverna_do_dragao"
  },
  {
    "name": "Chapolin Colorado",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/77e8debc90dbfd7e69d9decf09b9e05e.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138000.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138001.m3u8",
        "quality": "HD · 940x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138002.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138003.m3u8",
        "quality": "HD · 916x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138004.m3u8",
        "quality": "HD · 954x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138005.m3u8",
        "quality": "HD · 924x708"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138006.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138000.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138001.m3u8",
        "quality": "HD · 940x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138002.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138003.m3u8",
        "quality": "HD · 916x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138004.m3u8",
        "quality": "HD · 954x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138005.m3u8",
        "quality": "HD · 924x708"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138006.m3u8",
        "quality": "HD · 960x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169217.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_286_chapolin_colorado"
  },
  {
    "name": "Dois Homens e Meio",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/66a6edec30215e33b34d9a1a1fd25393.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137623.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137624.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137625.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137626.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137627.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137628.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137629.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137630.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137631.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137632.m3u8",
        "quality": "HD · 1280x722"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137633.m3u8",
        "quality": "FHD · 1916x1076"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137634.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137623.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137624.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137625.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137626.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137627.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137628.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137629.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137630.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137631.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137632.m3u8",
        "quality": "HD · 1280x722"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137633.m3u8",
        "quality": "FHD · 1916x1076"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137634.m3u8",
        "quality": "HD · 1280x718"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169221.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_287_dois_homens_e_meio"
  },
  {
    "name": "Dora Aventureira",
    "category": "Variedades",
    "logo": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/j30WV7vDXXorlbdKEHgl74stDml.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/151949.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/151949.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169304.m3u8",
        "quality": "SD · 720x480"
      }
    ],
    "id": "ch_288_dora_aventureira"
  },
  {
    "name": "Dragon Ball Super - Saga Deus da Destruicao Bills",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/626e71bf1e9d0b71d194c9359413ced6.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135484.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135484.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_289_dragon_ball_super_-_saga_deus_da_destruicao_bills"
  },
  {
    "name": "Dragon Ball Super - Trunks do Futuro",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/626e71bf1e9d0b71d194c9359413ced6.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135487.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135487.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_290_dragon_ball_super_-_trunks_do_futuro"
  },
  {
    "name": "Escolinha do Professor Raimundo",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/151df67d8d15f1c0c39c7779f27935b6.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137611.m3u8",
        "quality": "SD · 594x456"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137611.m3u8",
        "quality": "SD · 594x456"
      }
    ],
    "id": "ch_291_escolinha_do_professor_raimundo"
  },
  {
    "name": "Eu a Patroa e as Criancas",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/f8d46ebce886f39998603845cd3fc331.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138020.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138021.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138022.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138023.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138024.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138020.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138021.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138022.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138023.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138024.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_292_eu_a_patroa_e_as_criancas"
  },
  {
    "name": "Game Shakers",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/e1b30a8cf50dbe4b7da802f634c686b3.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138007.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138008.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/138009.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138007.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138008.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/138009.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_293_game_shakers"
  },
  {
    "name": "He Man e Os Defensores do Universo",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/66c305ee7bff6c27854be94434b46c7e.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135514.m3u8",
        "quality": "SD · 704x574"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135514.m3u8",
        "quality": "SD · 704x574"
      }
    ],
    "id": "ch_294_he_man_e_os_defensores_do_universo"
  },
  {
    "name": "Largados e Pelados",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/2246772d199347c5251faaac1a270575.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145928.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145929.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145930.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145931.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145932.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145933.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145934.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145935.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145936.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145937.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145938.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145928.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145929.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145930.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145931.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145932.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145933.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145934.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145935.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145936.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145937.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145938.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_295_largados_e_pelados"
  },
  {
    "name": "Mestres da Sobrevivencia",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/401f441af8a5f5b0211c085d1d755d95.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/137129.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/137129.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_296_mestres_da_sobrevivencia"
  },
  {
    "name": "Nicky Ricky Dicky e Dawn",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/fa42fec0efcb2f9a242913cad45ccba8.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145939.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145940.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145941.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/145942.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145939.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145940.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145941.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/145942.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_297_nicky_ricky_dicky_e_dawn"
  },
  {
    "name": "Um Maluco no Pedaco",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/3e3d6036a0a8a0f316aff080eca66868.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135445.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135446.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135448.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135449.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135450.m3u8",
        "quality": "HD · 1280x964"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/135451.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135445.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135446.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135448.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135449.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135450.m3u8",
        "quality": "HD · 1280x964"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/135451.m3u8",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169252.m3u8",
        "quality": "HD · 1280x960"
      }
    ],
    "id": "ch_298_um_maluco_no_pedaco"
  },
  {
    "name": "FCF TV 1",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/247976.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/247976.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_299_fcf_tv_1"
  },
  {
    "name": "Carros Irado",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/2dd914ca34a6a1ad2bdbb727f3e51140.jpg",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255224.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255225.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255226.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255227.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255228.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255229.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255230.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255231.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/255232.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255224.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255225.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255226.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255227.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255228.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255229.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255230.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255231.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/255232.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_300_carros_irado"
  },
  {
    "name": "CNBC Brasil",
    "category": "Notícias",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295477.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295478.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295479.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295480.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/295481.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295477.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295478.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295479.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295480.m3u8",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/295481.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/295477.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_301_cnbc_brasil"
  },
  {
    "name": "Brasileirao Serie A",
    "category": "Variedades",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317063.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317064.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317065.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317063.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317064.m3u8",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317065.m3u8",
        "quality": "SD"
      },
      {
        "url": "http://332nr7hbfu.xyz:80/live/999913/S3CvUB/317063.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_302_brasileirao_serie_a"
  },
  {
    "name": "Andorra x Malta",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317686.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317686.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_303_andorra_x_malta"
  },
  {
    "name": "Portugal x País de Gales",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317690.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_304_portugal_x_pa%C3%ADs_de_gales"
  },
  {
    "name": "Áustria x Israel",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317691.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317691.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_305_%C3%A1ustria_x_israel"
  },
  {
    "name": "Kosovo x Irlanda",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317692.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317692.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_306_kosovo_x_irlanda"
  },
  {
    "name": "Liechtenstein x Lituânia",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317693.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317693.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_307_liechtenstein_x_litu%C3%A2nia"
  },
  {
    "name": "Informações em Breve",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317694.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/317695.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318080.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318081.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318082.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318083.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318084.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/318085.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317694.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/317695.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318080.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318081.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318082.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318083.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318084.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/318085.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_308_informa%C3%A7%C3%B5es_em_breve"
  },
  {
    "name": "Gladiadores da Natureza",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/371456.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/371456.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_309_gladiadores_da_natureza"
  },
  {
    "name": "A Fazenda Cam 1",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397317.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397317.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_310_a_fazenda_cam_1"
  },
  {
    "name": "A Fazenda Cam 2",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397320.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397320.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_311_a_fazenda_cam_2"
  },
  {
    "name": "A Fazenda Cam 3",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397321.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397321.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_312_a_fazenda_cam_3"
  },
  {
    "name": "A Fazenda Cam 4",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397322.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397322.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_313_a_fazenda_cam_4"
  },
  {
    "name": "A Fazenda Cam 5",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397323.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397323.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_314_a_fazenda_cam_5"
  },
  {
    "name": "A Fazenda Cam 6",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/live/5q8VUj/5BeUd8/397324.m3u8",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/live/497238/KK8Kdy/397324.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_315_a_fazenda_cam_6"
  },
  {
    "name": "MAX 07",
    "category": "Filmes e Séries",
    "logo": "http://i.postimg.cc/L52gtQpb/BeDFSlD.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvOTg2MDQ5Lm0zdTg.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_316_max_07"
  },
  {
    "name": "MAX 08",
    "category": "Filmes e Séries",
    "logo": "http://i.postimg.cc/L52gtQpb/BeDFSlD.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvMTQ0ODQzMC5tM3U4.m3u8",
        "quality": "HD"
      }
    ],
    "id": "ch_317_max_08"
  },
  {
    "name": "PREMIERE 8 MOSAICO",
    "category": "Jogos & Esportes",
    "logo": "http://1.bp.blogspot.com/-9NsHz_itoFc/Xk70dxuLv7I/AAAAAAAACGQ/wCExIoJZ8xgbleziCR-Guhr-AkuLgFhVQCLcBGAsYHQ/s1600/premiere_2.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/30063.m3u8",
        "quality": "FHD"
      }
    ],
    "id": "ch_318_premiere_8_mosaico"
  },
  {
    "name": "JOGOS DE HOJE",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/339310.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_319_jogos_de_hoje"
  },
  {
    "name": "A FAZENDA 18 MOSAICO",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/afazenda2.png",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/2470067.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_320_a_fazenda_18_mosaico"
  },
  {
    "name": "CHAPOLIN",
    "category": "Variedades",
    "logo": "http://24horas.cc:80/images/77e8debc90dbfd7e69d9decf09b9e05e.jpg",
    "sources": [
      {
        "url": "http://corruptx.org:80/live/hfp5ejnrey/zq0u3kzads/1169216.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_321_chapolin"
  },
  {
    "name": "Disney Plus 1",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/disneyplus.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/2eecadabcdddd90849d70c752a70c0e0/disneyplus1.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/disney-plus",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/disneyplus1/disneyplus1.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_322_disney_plus_1"
  },
  {
    "name": "Disney Plus 2",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/disneyplus.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/disneyplus2/disneyplus2.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_323_disney_plus_2"
  },
  {
    "name": "Disney Plus 3",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/disneyplus.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/disneyplus3/disneyplus3.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_324_disney_plus_3"
  },
  {
    "name": "Paramount Plus 1",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/paramountplus.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTkwLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://aws.s13-s1001604.lat/stream/a3039490692b08e47bbd910816bcd954/paramountplus.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/paramount-plus-1789450199",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/paramountplus/paramountplus.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_325_paramount_plus_1"
  },
  {
    "name": "Paramount Plus 2",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/paramountplus.png",
    "sources": [
      {
        "url": "https://frostview.squareweb.app/relay/m/aHR0cDovL2Fic29sdXRvLnRvcC9saXZlLzIzMzczMTkyOS80MTAzMTQ1ODcvNzI1NTkxLm0zdTg.m3u8",
        "quality": "HD"
      },
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/paramountplus2/paramountplus2.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_326_paramount_plus_2"
  },
  {
    "name": "Prime Video 3",
    "category": "Filmes e Séries",
    "logo": "https://vipcanais.net/images/amazonprimevideo.png",
    "sources": [
      {
        "url": "https://fallback1.nexustvplay.bbroot.com/nxs/stream/primevideo3/primevideo3.m3u8",
        "quality": "Qualidade não informada"
      }
    ],
    "id": "ch_327_prime_video_3"
  },
  {
    "name": "Anime Channel TV",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv2.painelvideocast.com.br/animetv/animetv/playlist.m3u8",
        "quality": "SD · 640x360",
        "referer": "https://meufut.top/anime-tv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      }
    ],
    "id": "ch_328_anime_channel_tv"
  },
  {
    "name": "Otaku Sign TV",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/anime/anime/playlist.m3u8",
        "quality": "SD · 1024x576"
      }
    ],
    "id": "ch_329_otaku_sign_tv"
  },
  {
    "name": "Geekdot",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stream.ichibansys.com:3764/hybrid/play.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_330_geekdot"
  },
  {
    "name": "NBX TV Kids",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv4.voxtvhd.com.br/bnxkids/bnxkids/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_331_nbx_tv_kids"
  },
  {
    "name": "SBC Kids",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://video01.brascast.com/rede1220/rede1220/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_332_sbc_kids"
  },
  {
    "name": "Rede Crianças",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://video08.logicahost.com.br/kanucatv/kanucatv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_333_rede_crian%C3%A7as"
  },
  {
    "name": "Kuriakos Kids",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_334_kuriakos_kids"
  },
  {
    "name": "Gospel Cartoon",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8",
        "quality": "SD · 640x360"
      }
    ],
    "id": "ch_335_gospel_cartoon"
  },
  {
    "name": "Jetsons TV",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/jetsontv/jetsontv/playlist.m3u8",
        "quality": "SD · 640x480"
      }
    ],
    "id": "ch_336_jetsons_tv"
  },
  {
    "name": "24H Os Smurfs",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://d144py1prrd7ns.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-affg2ev32s0dq/smrfe.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/the-smurfs-tv",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      }
    ],
    "id": "ch_337_24h_os_smurfs"
  },
  {
    "name": "TV A Crítica",
    "category": "TV Aberta",
    "logo": "",
    "sources": [
      {
        "url": "https://video01.brascast.com/bdctv/bdctv/playlist.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/tv-a-critica",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      }
    ],
    "id": "ch_338_tv_a_cr%C3%ADtica"
  },
  {
    "name": "FIFA+ Português",
    "category": "Jogos & Esportes",
    "logo": "",
    "sources": [
      {
        "url": "https://c2657533.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UGxleC1icl9GSUZBUGx1c1BvcnR1Z3Vlc2VfSExT/playlist.m3u8",
        "quality": "SD · 384x216",
        "referer": "https://meufut.top/fifa",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      },
      {
        "url": "https://e3be9ac5.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfRklGQVBsdXNQb3J0dWd1ZXNlX0hMUw/playlist.m3u8",
        "quality": "SD"
      }
    ],
    "id": "ch_339_fifa%2B_portugu%C3%AAs"
  },
  {
    "name": "Viva",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/viva.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/5c26746b95e7ead7d92ec9b47d7f940f/viva.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/viva",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      }
    ],
    "id": "ch_340_viva"
  },
  {
    "name": "Comedy Central",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/comedycentral.png",
    "sources": [
      {
        "url": "https://aws.s13-s1001604.lat/stream/9be6499402ccfdef84b540cb6d808fb7/comedycentral.m3u8",
        "quality": "HD · 1280x720",
        "referer": "https://meufut.top/comedy-central",
        "agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
      }
    ],
    "id": "ch_341_comedy_central"
  },
  {
    "name": "Globo Bahia",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globo.png",
    "sources": [
      {
        "url": "http://hls1.sua.tv/live/globotvbahiafhdbr2/s.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_342_globo_bahia"
  },
  {
    "name": "Runtime Ação",
    "category": "Filmes e Séries",
    "logo": "",
    "sources": [
      {
        "url": "https://run-rt-ra.otteravision.com/run/rt_ra/rt_ra_720.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_343_runtime_a%C3%A7%C3%A3o"
  },
  {
    "name": "DreamWorks",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/dreamworks.png",
    "sources": [
      {
        "url": "https://origin-07.nxplay.com.br/DREAMWORKS/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_344_dreamworks"
  },
  {
    "name": "Top TV",
    "category": "Músicas",
    "logo": "",
    "sources": [
      {
        "url": "https://isaocorp.cloudecast.com/toptv/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_345_top_tv"
  },
  {
    "name": "MovieSphere Brazil",
    "category": "Filmes e Séries",
    "logo": "",
    "sources": [
      {
        "url": "https://amg00353-amg00353c29-plex-us-3205.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg00353-lionsgatetvfast-moviespherebrazil-plexus/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_346_moviesphere_brazil"
  },
  {
    "name": "Trace Urban",
    "category": "Músicas",
    "logo": "",
    "sources": [
      {
        "url": "https://amg01076-lightningintern-traceurban-xiaomi-m78n3.amagi.tv/playlist/amg01076-lightningintern-traceurban-xiaomi/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_347_trace_urban"
  },
  {
    "name": "Sony One Classics",
    "category": "Filmes e Séries",
    "logo": "",
    "sources": [
      {
        "url": "https://spt-sonyoneclassicas-1-br.samsung.wurl.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_348_sony_one_classics"
  },
  {
    "name": "Classique Faroeste",
    "category": "Filmes e Séries",
    "logo": "",
    "sources": [
      {
        "url": "https://amogonetworx-grjngo-1-eu.plex.wurl.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_349_classique_faroeste"
  },
  {
    "name": "Loading TV",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_350_loading_tv"
  },
  {
    "name": "Retrô Cartoon",
    "category": "Infantil",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv1.video.brstream.com.br/retrotv/retrotv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_351_retr%C3%B4_cartoon"
  },
  {
    "name": "Retro Music",
    "category": "Músicas",
    "logo": "",
    "sources": [
      {
        "url": "https://newstream.mediawork.cz/retrotv/smil:retrotv_new.smil/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_352_retro_music"
  },
  {
    "name": "Now Rock",
    "category": "Músicas",
    "logo": "",
    "sources": [
      {
        "url": "https://lightning-now90s-rakuten.amagi.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_353_now_rock"
  },
  {
    "name": "TV Clássicos",
    "category": "Filmes e Séries",
    "logo": "",
    "sources": [
      {
        "url": "https://stmv2.painelvideocast.com.br/multicanais/multicanais/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_354_tv_cl%C3%A1ssicos"
  },
  {
    "name": "Sexy Hot",
    "category": "Adulto (+18)",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sexy-hot.png",
    "sources": [
      {
        "url": "https://canais.fazoeli.co.za/fontes/smart/sexyhot.m3u8"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/180157.ts",
        "quality": "4K"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/180153.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/180156.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/180154.ts",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/72310.ts",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/180157.ts",
        "quality": "4K"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/180153.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/180156.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/180154.ts",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/72310.ts",
        "quality": "SD"
      }
    ],
    "id": "ch_355_sexy_hot"
  },
  {
    "name": "Playboy TV",
    "category": "Adulto (+18)",
    "logo": "https://mondrian.claro.com.br/channels/inverse/playboy-tv.png",
    "sources": [
      {
        "url": "https://canais.fazoeli.co.za/fontes/smart/playboy.m3u8"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/72221.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/72224.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/72222.ts",
        "quality": "HD"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/72223.ts",
        "quality": "SD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/72221.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/72224.ts",
        "quality": "FHD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/72222.ts",
        "quality": "HD"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/72223.ts",
        "quality": "SD"
      }
    ],
    "id": "ch_356_playboy_tv"
  },
  {
    "name": "Anal",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/anal.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_357_anal"
  },
  {
    "name": "Asian",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/asian.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_358_asian"
  },
  {
    "name": "Big Ass",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/bigass.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_359_big_ass"
  },
  {
    "name": "Big Dick",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/bigdick.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_360_big_dick"
  },
  {
    "name": "Big Tits",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/bigtits.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_361_big_tits"
  },
  {
    "name": "Blowjob",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/blowjob.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_362_blowjob"
  },
  {
    "name": "Compilation",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/compilation.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_363_compilation"
  },
  {
    "name": "Fetish",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/fetish.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_365_fetish"
  },
  {
    "name": "Gangbang",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/gangbang.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_366_gangbang"
  },
  {
    "name": "Hardcore",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/hardcore.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_368_hardcore"
  },
  {
    "name": "Interracial",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/interracial.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_369_interracial"
  },
  {
    "name": "Live Cams",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/livecams.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_370_live_cams"
  },
  {
    "name": "Pornstar",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/pornstar.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_371_pornstar"
  },
  {
    "name": "POV",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/pov.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_372_pov"
  },
  {
    "name": "Rough",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/rough.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_373_rough"
  },
  {
    "name": "Russian",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/russian.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_374_russian"
  },
  {
    "name": "Threesome",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://cdn.adultiptv.net/threesome.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_375_threesome"
  },
  {
    "name": "Woman",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.redtraffic.net/woman.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_376_woman"
  },
  {
    "name": "MyCam Anal",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/anal.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_377_mycam_anal"
  },
  {
    "name": "MyCam Asian",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/asian.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_378_mycam_asian"
  },
  {
    "name": "MyCam Big Ass",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/defstream.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_379_mycam_big_ass"
  },
  {
    "name": "MyCam Big Tits",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/bigtits.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_380_mycam_big_tits"
  },
  {
    "name": "MyCam Blonde",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/blonde.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_381_mycam_blonde"
  },
  {
    "name": "MyCam Brunette",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/brunette.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_382_mycam_brunette"
  },
  {
    "name": "MyCam Latina",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/latina.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_383_mycam_latina"
  },
  {
    "name": "MyCam Squirt",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/squirt.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_384_mycam_squirt"
  },
  {
    "name": "MyCam White",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://live.mycamtv.com/white.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_385_mycam_white"
  },
  {
    "name": "Jenny Live",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://59ec5453559f0.streamlock.net/JennyLive/JennyLive/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_386_jenny_live"
  },
  {
    "name": "Miami TV Mexico",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "https://59ec5453559f0.streamlock.net/mexicotv/smil:miamitvmexico/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_387_miami_tv_mexico"
  },
  {
    "name": "O-la-la!",
    "category": "Adulto (+18)",
    "logo": "https://i.imgur.com/6aOmZs4.png",
    "sources": [
      {
        "url": "http://31.148.48.15/O-la-la/index.m3u8"
      }
    ],
    "id": "ch_388_o-la-la!"
  },
  {
    "name": "Playboy TV Latin America",
    "category": "Adulto (+18)",
    "logo": "https://i.imgur.com/B3DMUM9.png",
    "sources": [
      {
        "url": "http://190.11.225.124:5000/live/playboy_hd/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_389_playboy_tv_latin_america"
  },
  {
    "name": "Penthouse TV",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/5010/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_390_penthouse_tv"
  },
  {
    "name": "Penthouse TV 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/5012/index.m3u8",
        "quality": "SD · 1024x576"
      }
    ],
    "id": "ch_391_penthouse_tv_2"
  },
  {
    "name": "21 Sexture",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6164/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_392_21_sexture"
  },
  {
    "name": "SexArt",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6165/index.m3u8",
        "quality": "HD · 1686x720"
      }
    ],
    "id": "ch_393_sexart"
  },
  {
    "name": "Adult Time",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6166/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_394_adult_time"
  },
  {
    "name": "My Cam TV 1",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6167/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_395_my_cam_tv_1"
  },
  {
    "name": "Analized",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6168/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_396_analized"
  },
  {
    "name": "Babes",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6171/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_398_babes"
  },
  {
    "name": "Bang Bros",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6173/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_399_bang_bros"
  },
  {
    "name": "Bang",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6174/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_400_bang"
  },
  {
    "name": "Bang Bros 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6175/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_401_bang_bros_2"
  },
  {
    "name": "My Cam TV 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6176/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_402_my_cam_tv_2"
  },
  {
    "name": "InteRacial",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6177/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_403_interacial"
  },
  {
    "name": "Blacked",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6178/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_404_blacked"
  },
  {
    "name": "My Cam TV 3",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6180/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_405_my_cam_tv_3"
  },
  {
    "name": "Brazzers",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6181/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_406_brazzers"
  },
  {
    "name": "Brazzers 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6182/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_407_brazzers_2"
  },
  {
    "name": "My Cam TV 4",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6183/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_408_my_cam_tv_4"
  },
  {
    "name": "Cento X Cento",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6184/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_409_cento_x_cento"
  },
  {
    "name": "Cherry Pimps",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6185/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_410_cherry_pimps"
  },
  {
    "name": "Club Sweethearts",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6186/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_411_club_sweethearts"
  },
  {
    "name": "My Cam TV 5",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6187/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_412_my_cam_tv_5"
  },
  {
    "name": "My Cam TV 6",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6188/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_413_my_cam_tv_6"
  },
  {
    "name": "Cum Louder",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6189/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_414_cum_louder"
  },
  {
    "name": "Cum 4K",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6190/index.m3u8",
        "quality": "4K · 3840x2160"
      }
    ],
    "id": "ch_415_cum_4k"
  },
  {
    "name": "Daughter Swap",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6191/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_416_daughter_swap"
  },
  {
    "name": "Brazzers 3",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6192/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_417_brazzers_3"
  },
  {
    "name": "DDF Network",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6193/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_418_ddf_network"
  },
  {
    "name": "DDF Network 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6194/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_419_ddf_network_2"
  },
  {
    "name": "XXX",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6195/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_420_xxx"
  },
  {
    "name": "DP",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6196/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_421_dp"
  },
  {
    "name": "Dorcel Club",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6197/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_422_dorcel_club"
  },
  {
    "name": "Deep Lush",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6198/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_423_deep_lush"
  },
  {
    "name": "Evil Angel",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6199/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_424_evil_angel"
  },
  {
    "name": "XXX 2",
    "category": "Adulto (+18)",
    "logo": "",
    "sources": [
      {
        "url": "http://s1w8pqrh.megatv.fun/iptv/VZEVDE3KMBMVGUR9Y2EEL7EF/6200/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_425_xxx_2"
  },
  {
    "name": "Sex Privé",
    "category": "Adulto (+18)",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sex-prive.png",
    "sources": [
      {
        "url": "https://cdn-mg1.satlabscloud.com.br/SEX_PRIVE/index.m3u8?token=ulDZjn1kAAan1kzoXmUL1B84gijOI6v7",
        "quality": "FHD · 1920x1080"
      }
    ],
    "id": "ch_426_sex_priv%C3%A9"
  },
  {
    "name": "A Casa das Brasileirinhas",
    "category": "Adulto (+18)",
    "logo": "http://24horas.cc:80/images/508f0d666609e140b531f552b60c3478.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140487.ts",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140488.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140489.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140490.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140491.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140487.ts",
        "quality": "HD · 1280x960"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140488.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140489.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140490.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140491.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_427_a_casa_das_brasileirinhas"
  },
  {
    "name": "All Anal",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166035.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166036.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166037.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166038.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166039.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166040.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/166041.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166035.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166036.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166037.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166038.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166039.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166040.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/166041.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_428_all_anal"
  },
  {
    "name": "Anal Only",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/149544.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/149544.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_429_anal_only"
  },
  {
    "name": "Filmes Adultos",
    "category": "Adulto (+18)",
    "logo": "http://24horas.cc:80/images/f859ff8b3b8b08745491656f1dab6019.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140536.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140537.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140538.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140539.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140540.ts",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/149545.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/150115.ts",
        "quality": "HD · 1280x938"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/150116.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/150492.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/150493.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/155424.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/155425.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/155426.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/155427.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/155428.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225349.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225348.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225347.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225346.ts",
        "quality": "SD · 1280x688"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225345.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225344.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225343.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225342.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225341.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225340.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225339.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225338.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225337.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225336.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225335.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225334.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225333.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/225332.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140536.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140537.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140538.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140539.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140540.ts",
        "quality": "SD · 854x480"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/149545.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/150115.ts",
        "quality": "HD · 1280x938"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/150116.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/150492.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/150493.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/155424.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/155425.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/155426.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/155427.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/155428.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225349.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225348.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225347.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225346.ts",
        "quality": "SD · 1280x688"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225345.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225344.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225343.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225342.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225341.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225340.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225339.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225338.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225337.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225336.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225335.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225334.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225333.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/225332.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_430_filmes_adultos"
  },
  {
    "name": "Fuck Studies",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169085.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169086.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169087.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169085.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169086.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169087.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_432_fuck_studies"
  },
  {
    "name": "Interesseiras",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/149606.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/149606.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_434_interesseiras"
  },
  {
    "name": "Lets Try Anal",
    "category": "Adulto (+18)",
    "logo": "http://24horas.cc:80/images/f859ff8b3b8b08745491656f1dab6019.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140760.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/141499.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/141500.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140760.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/141499.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/141500.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_435_lets_try_anal"
  },
  {
    "name": "MissaX",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169088.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169089.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169090.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169091.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169092.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169093.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169094.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169095.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169096.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169088.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169089.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169090.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169091.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169092.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169093.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169094.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169095.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169096.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_436_missax"
  },
  {
    "name": "Pornhub Yinyleon",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/149548.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/149548.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_437_pornhub_yinyleon"
  },
  {
    "name": "Teste de Fudelidade",
    "category": "Adulto (+18)",
    "logo": "http://24horas.cc:80/images/3e81163f7309a5a4f01613ff430db818.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140761.ts",
        "quality": "HD · 1280x728"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/140762.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/145384.ts",
        "quality": "HD · 1280x728"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140761.ts",
        "quality": "HD · 1280x728"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/140762.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/145384.ts",
        "quality": "HD · 1280x728"
      }
    ],
    "id": "ch_438_teste_de_fudelidade"
  },
  {
    "name": "Tweetney",
    "category": "Adulto (+18)",
    "logo": "http://vaiagora.vip/images/22219a38e43a2a4d58d0dd34c43a14c7.jpg",
    "sources": [
      {
        "url": "http://vaiagora.vip:80/5q8VUj/5BeUd8/169097.ts",
        "quality": "HD · 1280x720"
      },
      {
        "url": "http://vivlar.me:80/497238/KK8Kdy/169097.ts",
        "quality": "HD · 1280x720"
      }
    ],
    "id": "ch_439_tweetney"
  }
];
