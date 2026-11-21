import type { Channel } from '../types';

export const FALLBACK_CHANNELS: Channel[] = [
  {
    "id": "saimo_1",
    "number": 1,
    "name": "Band",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/band.png",
    "sources": [
      {
        "url": "https://vipwaytvcdn.multtv.tv.br:5444/TVThathi_Band/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://vipwaytvcdn.multtv.tv.br:5444/TVThathi_Band/720p/index.m3u8"
      }
    ]
  },
  {
    "id": "saimo_2",
    "number": 2,
    "name": "CNN Brasil",
    "category": "Notícias",
    "logo": "https://img.faz-o-eli.online/cnnbrasil.png",
    "sources": [
      {
        "url": "https://amg01391-sbtinfast-amg01391c4-lg-br-4597.playouts.now.amagi.tv/playlist/amg01391-addigital-cnnbrasil-lgbr/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://d25usgadhphvwi.cloudfront.net/hls/stv-plus1920x1080/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://d25usgadhphvwi.cloudfront.net/hls/main.m3u8",
        "name": "BR"
      }
    ]
  },
  {
    "id": "saimo_3",
    "number": 3,
    "name": "CNN Brasil Money",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/cnn-brasil-money.png",
    "sources": [
      {
        "url": "https://amg01391-amg01391c57-amgplt0026.playout.now3.amagi.tv/playlist/amg01391-amg01391c57-amgplt0026/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_4",
    "number": 4,
    "name": "GE TV",
    "category": "Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/ge-tv.png",
    "sources": [
      {
        "url": "https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist1080p.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://proxylinkurl.wored85282.workers.dev/https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://amg00716-globo-amg00716c1-tcl-br-9495.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://dfr80qz435crc.cloudfront.net/EFGH/Amagi/Globo/GE_Fast_BR/GE_Fast.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_5",
    "number": 5,
    "name": "Jovem Pan News",
    "category": "Notícias",
    "logo": "https://www.tvlogo.org/brazil/jovem-pan-news-br.png",
    "sources": [
      {
        "url": "https://amg01391-sbtinfast-amg01391c3-lg-us-8995.playouts.now.amagi.tv/playlist/amg01391-addigital-jovempan-lgus/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://amg01391-amg01391c3-tcl-spain-5038.playouts.now.amagi.tv/playlist1080-p.m3u8"
      }
    ]
  },
  {
    "id": "saimo_6",
    "number": 6,
    "name": "SBT",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sbt.png",
    "sources": [
      {
        "url": "https://aovivo.maissbt.com/indexMobile.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://6836041ea1117.streamlock.net/cverde/cverde/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_7",
    "number": 7,
    "name": "SBT News",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sbt-news.png",
    "sources": [
      {
        "url": "https://sbtnews.maissbt.com/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://sbtnews.maissbt.com/3.m3u8"
      },
      {
        "url": "https://dai.google.com/linear/hls/event/1XSOdtQ0SH2G8OEmEfGgjQ/master.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_8",
    "number": 8,
    "name": "TV Brasil",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-brasil.png",
    "sources": [
      {
        "url": "https://tvbrasil-stream.ebc.com.br/index.m3u8",
        "quality": "SD · 576x324"
      }
    ]
  },
  {
    "id": "saimo_9",
    "number": 9,
    "name": "Warner",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/warnerchannel.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/WARNER_HD/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_10",
    "number": 10,
    "name": "IMPD",
    "category": "Variedades",
    "logo": "https://d5pgibznjcs0s.cloudfront.net/46d92cf6-4807-45c6-9bfd-b38f80288c86/en/images/logo_full.png",
    "sources": [
      {
        "url": "https://igrejamundial.nuvemplay.live/hls/stream.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_11",
    "number": 11,
    "name": "Globo SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/GLOBO_SP/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_12",
    "number": 12,
    "name": "Cinemax",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/cinemax.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/CINEMAX/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_13",
    "number": 13,
    "name": "ESPN 2",
    "category": "Esportes",
    "logo": "https://img.faz-o-eli.online/espn2.png",
    "sources": [
      {
        "url": "https://cdn-aovivo-atualplay.nxtv.com.br/ESPN_2/index.m3u8"
      }
    ]
  },
  {
    "id": "saimo_14",
    "number": 14,
    "name": "ESPN 4",
    "category": "Esportes",
    "logo": "https://img.faz-o-eli.online/espn4.png",
    "sources": [
      {
        "url": "https://cdn-aovivo-atualplay.nxtv.com.br/ESPN_4/index.m3u8"
      }
    ]
  },
  {
    "id": "saimo_15",
    "number": 15,
    "name": "HBO2",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbo2.png",
    "sources": [
      {
        "url": "https://gigalinks.sattvgo.com.br/HBO2/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_16",
    "number": 16,
    "name": "HBO Family",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbofamily.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/HBO_FAMILY/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_17",
    "number": 17,
    "name": "HBO Mundi",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbomundi.png",
    "sources": [
      {
        "url": "https://cdn-rs1.satlabscloud.com.br/HBO_MUNDI_HD/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_18",
    "number": 18,
    "name": "HBO Plus",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hboplus.png",
    "sources": [
      {
        "url": "https://grupoa.satlabscloud.com.br/HBO_PLUS/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_19",
    "number": 19,
    "name": "HBO Pop",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/hbopop.png",
    "sources": [
      {
        "url": "https://gvtelecom.satlabscloud.com.br/HBO_POP_HD/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_20",
    "number": 20,
    "name": "HBO Signature",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/hbo-signature.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/HBO_SIGNATURE/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_21",
    "number": 21,
    "name": "TNT",
    "category": "Filmes e Séries",
    "logo": "https://img.faz-o-eli.online/tnt.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/TNT/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_22",
    "number": 22,
    "name": "RedeTV!",
    "category": "TV Aberta",
    "logo": "https://www.tvlogo.org/brazil/rede-tv-br.png",
    "sources": [
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/chunklist_w1074634538.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_23",
    "number": 23,
    "name": "TV Cultura",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/cultura.png",
    "sources": [
      {
        "url": "https://player-tvcultura.stream.uol.com.br/live/tvcultura.m3u8",
        "quality": "SD · 960x540"
      },
      {
        "url": "https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_24",
    "number": 24,
    "name": "Terra Viva",
    "category": "Variedades",
    "logo": "https://www.tvlogo.org/brazil/terraviva-br.png",
    "sources": [
      {
        "url": "https://9ada494d.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfVXBseW5rLU5ld2NvX0hMUw/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_25",
    "number": 25,
    "name": "ESPN 3",
    "category": "Esportes",
    "logo": "https://img.faz-o-eli.online/espn3.png",
    "sources": [
      {
        "url": "https://cdn-aovivo-atualplay.nxtv.com.br/ESPN_3/index.m3u8"
      }
    ]
  },
  {
    "id": "saimo_26",
    "number": 26,
    "name": "TV Gazeta",
    "category": "TV Aberta",
    "logo": "https://mondrian.claro.com.br/channels/inverse/tv-gazeta.png",
    "sources": [
      {
        "url": "https://video08.logicahost.com.br/tvc21/tvc21/chunklist_w930922724.m3u8"
      }
    ]
  },
  {
    "id": "saimo_27",
    "number": 27,
    "name": "Record News",
    "category": "Notícias",
    "logo": "https://mondrian.claro.com.br/channels/inverse/recordnews.png",
    "sources": [
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=5431",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://rnw-rn-samsungtvplus.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://rnw-rn.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://rnw-rn-soultv.otteravision.com/rnw/rn/rnw_rn.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://run-rnw-rn.otteravision.com/rnw/rn/rnw_rn_720p_high.m3u8"
      }
    ]
  },
  {
    "id": "saimo_28",
    "number": 28,
    "name": "Canção Nova",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/cancaonova.png",
    "sources": [
      {
        "url": "https://5c65286fc6ace.streamlock.net/cancaonova/CancaoNova.stream_720p/playlist.m3u8",
        "quality": "HD"
      }
    ]
  },
  {
    "id": "saimo_29",
    "number": 29,
    "name": "Rede Vida",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/redevida.png",
    "sources": [
      {
        "url": "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://d12e4o88jd8gex.cloudfront.net/out/v1/cea3de0b76ac4e82ab8ee0fd3f17ce12/index_1.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_30",
    "number": 30,
    "name": "Record SP",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/RECORD_SP/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_31",
    "number": 31,
    "name": "TV Pai Eterno",
    "category": "Variedades",
    "logo": "https://img.faz-o-eli.online/tvpaieterno.png",
    "sources": [
      {
        "url": "https://video09.logicahost.com.br/paieterno/paieterno/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_32",
    "number": 32,
    "name": "PlayTV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/Ikrj3lk.png",
    "sources": [
      {
        "url": "https://isaocorp.cloudecast.com/playtv/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_33",
    "number": 33,
    "name": "Rede Brasil",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/TXJKwzZ.png",
    "sources": [
      {
        "url": "https://redebrasil.nuvemplay.live/hls/stream.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://video09.logicahost.com.br/redebrasiloficial/redebrasiloficial/playlist.m3u8"
      }
    ]
  },
  {
    "id": "saimo_34",
    "number": 34,
    "name": "Rede Gospel",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/rede-gospel-br.png",
    "sources": [
      {
        "url": "https://redegospel-aovivo.nuvemplay.live/hls/stream.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8",
        "name": "BR"
      }
    ]
  },
  {
    "id": "saimo_35",
    "number": 35,
    "name": "Trace Brazuca",
    "category": "Variedades",
    "logo": "https://mondrian.claro.com.br/channels/inverse/trace-brazuca.png",
    "sources": [
      {
        "url": "https://amg01131-tracetv-tracebrazuca-xiaomi-vvr19.amagi.tv/playlist/amg01131-tracetv-tracebrazuca-xiaomi/playlist.m3u8",
        "quality": "HD · 1280x720"
      },
      {
        "url": "https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01131-tracetv-tracebrazuca-samsungbr/playlist.m3u8",
        "quality": "Qualidade não informada"
      }
    ]
  },
  {
    "id": "saimo_36",
    "number": 36,
    "name": "TV Novo Tempo",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/novo-tempo-br.png",
    "sources": [
      {
        "url": "https://streamtv.novotempo.com/CDN-TV-PT/smil:tvnovotempo.smil/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_37",
    "number": 37,
    "name": "RIT",
    "category": "Variedades",
    "logo": "https://raw.githubusercontent.com/tv-logo/tv-logos/main/countries/brazil/rit-br.png",
    "sources": [
      {
        "url": "https://acesso.ecast.site:3648/live/ritlive.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://stream.ecast.com.br/rit-tv/tracks-v1a1/mono.m3u8"
      }
    ]
  },
  {
    "id": "saimo_38",
    "number": 38,
    "name": "Blits TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/FO4QTRf.jpeg",
    "sources": [
      {
        "url": "https://stmv1.transmissaodigital.com/blitstv/blitstv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_39",
    "number": 39,
    "name": "Com Brasil",
    "category": "Variedades",
    "logo": "https://i.imgur.com/GrjGwKM.png",
    "sources": [
      {
        "url": "https://br5093.streamingdevideo.com.br/abc/abc/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://dfr80qz435crc.cloudfront.net/EFGH/Amagi/NewCo/New_Brasil_BR/New_Brasil.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_40",
    "number": 40,
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
    ]
  },
  {
    "id": "saimo_41",
    "number": 41,
    "name": "Canal Educacao",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/OOB7nrS.png",
    "sources": [
      {
        "url": "https://canaleducacao-stream.ebc.com.br/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_42",
    "number": 42,
    "name": "Canal Gov",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/rHPY0Yv.png",
    "sources": [
      {
        "url": "https://canalgov-stream.ebc.com.br/index.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_43",
    "number": 43,
    "name": "Cultura Fast",
    "category": "TV Aberta",
    "logo": "https://eitv6.cdn.broadpeak.io/account351-i1438/channel/53/quadrada_-3-_pequeno-1723832301.png",
    "sources": [
      {
        "url": "https://fpa-gateway.tvcultura.com.br:8181/memfs/606caef0-a290-413d-9f1f-8fcdb3a73831.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_44",
    "number": 44,
    "name": "MasterChef",
    "category": "24 Horas",
    "logo": "https://images.pluto.tv/channels/6077045b6031bd00078de127/colorLogoPNG_1785430539950.png",
    "sources": [
      {
        "url": "https://amg00627-amg00627c9-runtime-latam-2613.playouts.now.amagi.tv/ts-us-w2-n1/playlist/amg00627-banijayfast-masterchefbrazil-runtimelatam/cb543d167c6c618784cb3760cef342a0f94b1fde1d6988693eb5518975d1073edce2a59caa08ff16388f1ede7f0a66413a3e951fda77118fd87eb141453c5728cfffe729a2c05616b7db083429b56a062a866a68ac39437ed0e21f48a238b6720a5aa82a66443d80b846ac7352db80148b61299bce8c37683f03409a5e5afba358b38ab50a5ad969a1af1c56953145f59647c0dd4ebdd4d20883448e7fa7099c93a68ace42d381c77efc02b036510f7a2fc98528cbfbb5d7b0eb01b321c2493c7c77d4e1f5dc5c3d9c4e4f2e8095a98c448fdd4a1447fb0d04b4158c47c411876eb800a4e034d1c52c03f0204bcef7f8a228e0d5a19ff73a71c90e6a7e5bbc011eaac66e1174c86298122a2d9cf28173eea645c7e673d5e62e7559b158362bb90a43b810f4f8fc9ba8aec6bf9d083f4209079454a19b22e828d24798cf062d5377e3ccf048e989c3573c6e4ec9d5108453538ed28587d019288a4e2f1ab930970b5e2cfb3d622ab176b9826a38c0662b952531fe6f308269f5ac63a0f48cab556df596ec6acb42c3f94adeff09ac2d1b5c01b8fd651f66446fdfe36342612c930bb49d9aaf274933edf1ccecc91c6d546e59015acbc7e377d4df957953468f03683006657dfc33df67db0f5e136e984ea1cb2740c5577163b6dd703733419fcba38e94d9cc50c716fec6fe2b20285665a9496b036ad4b3cd14bd0f42707e52971c262499024949fe9ad9effad13a9b7c05109ca8a6054b0f3f8d3f8d662d6d5d57dc5c82626e/145/1920x1080_6046040/index.m3u8"
      }
    ]
  },
  {
    "id": "saimo_45",
    "number": 45,
    "name": "MyTime Movie Network",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/aiGQtzI.png",
    "sources": [
      {
        "url": "https://appletree-mytime-samsungbrazil.amagi.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_46",
    "number": 46,
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
    ]
  },
  {
    "id": "saimo_47",
    "number": 47,
    "name": "NickToons Brasil",
    "category": "Infantil",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Nicktoons_logo_%282023%29.svg/330px-Nicktoons_logo_%282023%29.svg.png",
    "sources": [
      {
        "url": "https://stmv2.srvif.com/nicktoons/nicktoons/playlist.m3u8",
        "quality": "SD · 854x480"
      }
    ]
  },
  {
    "id": "saimo_48",
    "number": 48,
    "name": "Nickelodeon",
    "category": "Infantil",
    "logo": "https://img.faz-o-eli.online/nickelodeon.png",
    "sources": [
      {
        "url": "https://stmv2.srvif.com/gafeab/gafeab/playlist.m3u8",
        "quality": "SD · 854x480"
      }
    ]
  },
  {
    "id": "saimo_49",
    "number": 49,
    "name": "Rede TV!",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/ZJgD38F.png",
    "sources": [
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      },
      {
        "url": "https://tv01.zas.media:1936/redetvparana/redetvparana/chunklist_w1074634538.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_50",
    "number": 50,
    "name": "Runtime",
    "category": "Filmes e Séries",
    "logo": "https://images.pluto.tv/channels/62c5d32e2c48f9000715b6e9/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://stream.ads.ottera.tv/playlist.m3u8?network_id=2153",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_51",
    "number": 51,
    "name": "CazeTV 1",
    "category": "Esportes",
    "logo": "https://img.faz-o-eli.online/cazetv.png",
    "sources": [
      {
        "url": "https://amg01391-amg01391c10-tcl-br-9630.playouts.now.amagi.tv/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_52",
    "number": 52,
    "name": "Globo ES",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globosp.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/GLOBO_ES/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_53",
    "number": 53,
    "name": "Globo RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/globorj.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/GLOBO_RIO/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_54",
    "number": 54,
    "name": "Record RJ",
    "category": "TV Aberta",
    "logo": "https://img.faz-o-eli.online/record.png",
    "sources": [
      {
        "url": "https://gvtelecom.satlabscloud.com.br/RECORD_RIO/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "saimo_55",
    "number": 55,
    "name": "Anime Channel TV",
    "category": "Infantil",
    "logo": "https://i.imgur.com/eHw2M6p.png",
    "sources": [
      {
        "url": "https://stmv2.painelvideocast.com.br/animetv/animetv/playlist.m3u8",
        "quality": "SD · 640x360"
      }
    ]
  },
  {
    "id": "saimo_56",
    "number": 56,
    "name": "Otaku Sign TV",
    "category": "Infantil",
    "logo": "https://i.imgur.com/eHw2M6p.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/anime/anime/playlist.m3u8",
        "quality": "SD · 1024x576"
      }
    ]
  },
  {
    "id": "saimo_57",
    "number": 57,
    "name": "Geekdot",
    "category": "Infantil",
    "logo": "https://i.imgur.com/jML1u4O.png",
    "sources": [
      {
        "url": "https://stream.ichibansys.com:3764/hybrid/play.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_58",
    "number": 58,
    "name": "NBX TV Kids",
    "category": "Infantil",
    "logo": "https://i.imgur.com/SRX6EPY.png",
    "sources": [
      {
        "url": "https://stmv4.voxtvhd.com.br/bnxkids/bnxkids/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_59",
    "number": 59,
    "name": "SBC Kids",
    "category": "Infantil",
    "logo": "https://i.imgur.com/SRX6EPY.png",
    "sources": [
      {
        "url": "https://video01.brascast.com/rede1220/rede1220/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_60",
    "number": 60,
    "name": "Rede Crianças",
    "category": "Infantil",
    "logo": "https://i.imgur.com/SRX6EPY.png",
    "sources": [
      {
        "url": "https://video08.logicahost.com.br/kanucatv/kanucatv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_61",
    "number": 61,
    "name": "Kuriakos Kids",
    "category": "Infantil",
    "logo": "https://i.imgur.com/SRX6EPY.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/kkids/smil:kkids.smil/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_62",
    "number": 62,
    "name": "Gospel Cartoon",
    "category": "Infantil",
    "logo": "https://i.imgur.com/yxjPno5.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8",
        "quality": "SD · 640x360"
      }
    ]
  },
  {
    "id": "saimo_63",
    "number": 63,
    "name": "Jetsons TV",
    "category": "Infantil",
    "logo": "https://i.imgur.com/PZcTfqV.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/jetsontv/jetsontv/playlist.m3u8",
        "quality": "SD · 640x480"
      }
    ]
  },
  {
    "id": "saimo_64",
    "number": 64,
    "name": "24H Os Smurfs",
    "category": "24 Horas",
    "logo": "https://img.faz-o-eli.online/24h.png",
    "sources": [
      {
        "url": "https://d144py1prrd7ns.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-affg2ev32s0dq/smrfe.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_65",
    "number": 65,
    "name": "TV A Crítica",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/j51rBro.png",
    "sources": [
      {
        "url": "https://video01.brascast.com/bdctv/bdctv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_66",
    "number": 66,
    "name": "FIFA+ Português",
    "category": "Esportes",
    "logo": "https://mondrian.claro.com.br/channels/inverse/fifa-plus.png",
    "sources": [
      {
        "url": "https://c2657533.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UGxleC1icl9GSUZBUGx1c1BvcnR1Z3Vlc2VfSExT/playlist.m3u8",
        "quality": "SD · 384x216"
      },
      {
        "url": "https://e3be9ac5.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/TEctYnJfRklGQVBsdXNQb3J0dWd1ZXNlX0hMUw/playlist.m3u8",
        "quality": "SD"
      }
    ]
  },
  {
    "id": "saimo_67",
    "number": 67,
    "name": "Runtime Ação",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/3rM8nL2.png",
    "sources": [
      {
        "url": "https://run-rt-ra.otteravision.com/run/rt_ra/rt_ra_720.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_68",
    "number": 68,
    "name": "Top TV",
    "category": "Músicas",
    "logo": "https://i.imgur.com/aKbHjFO.png",
    "sources": [
      {
        "url": "https://isaocorp.cloudecast.com/toptv/index.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_69",
    "number": 69,
    "name": "MovieSphere Brazil",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/c6uFj7A.png",
    "sources": [
      {
        "url": "https://amg00353-amg00353c29-plex-us-3205.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg00353-lionsgatetvfast-moviespherebrazil-plexus/playlist.m3u8",
        "quality": "FHD · 1920x1080"
      }
    ]
  },
  {
    "id": "saimo_70",
    "number": 70,
    "name": "Trace Urban",
    "category": "Músicas",
    "logo": "https://i.imgur.com/DLIbUMx.png",
    "sources": [
      {
        "url": "https://amg01076-lightningintern-traceurban-xiaomi-m78n3.amagi.tv/playlist/amg01076-lightningintern-traceurban-xiaomi/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_71",
    "number": 71,
    "name": "Sony One Classics",
    "category": "Filmes e Séries",
    "logo": "https://mondrian.claro.com.br/channels/inverse/sony-movies.png",
    "sources": [
      {
        "url": "https://spt-sonyoneclassicas-1-br.samsung.wurl.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_72",
    "number": 72,
    "name": "Classique Faroeste",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/c6uFj7A.png",
    "sources": [
      {
        "url": "https://amogonetworx-grjngo-1-eu.plex.wurl.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_73",
    "number": 73,
    "name": "Loading TV",
    "category": "Infantil",
    "logo": "https://i.imgur.com/R0aflu1.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/loadingtv/loadingtv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_74",
    "number": 74,
    "name": "Retrô Cartoon",
    "category": "Infantil",
    "logo": "https://i.imgur.com/hIlEfhl.png",
    "sources": [
      {
        "url": "https://stmv1.video.brstream.com.br/retrotv/retrotv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_75",
    "number": 75,
    "name": "Retro Music",
    "category": "Músicas",
    "logo": "https://i.imgur.com/pyOjdZs.png",
    "sources": [
      {
        "url": "https://newstream.mediawork.cz/retrotv/smil:retrotv_new.smil/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_76",
    "number": 76,
    "name": "Now Rock",
    "category": "Músicas",
    "logo": "https://i.imgur.com/GuM4GnX.png",
    "sources": [
      {
        "url": "https://lightning-now90s-rakuten.amagi.tv/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_77",
    "number": 77,
    "name": "TV Clássicos",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/c6uFj7A.png",
    "sources": [
      {
        "url": "https://stmv2.painelvideocast.com.br/multicanais/multicanais/playlist.m3u8",
        "quality": "HD · 1280x720"
      }
    ]
  },
  {
    "id": "saimo_78",
    "number": 78,
    "name": "Record DF",
    "category": "TV Aberta",
    "logo": "https://1.embedcanaisdetv.com/images/record.png",
    "sources": [
      {
        "url": "https://net11.sattvgo.com.br/RECORD_DF/index.m3u8?token=RGnYBgq1dxRk5Eur690t0mpVo01rfWpPLxrMx"
      }
    ]
  },
  {
    "id": "pub_1",
    "name": "1001 Noites",
    "category": "Variedades",
    "logo": "https://i.imgur.com/dWA9y2J.png",
    "sources": [
      {
        "url": "https://cpbr.appflux.com.br:2000/hls/1001noites/1001noites.m3u8",
        "name": "BR"
      }
    ],
    "number": 79
  },
  {
    "id": "pub_2",
    "name": "+MaisUm",
    "category": "Filmes e Séries",
    "logo": "https://i.ibb.co/ZRDvqJcf/Logo-Mais-Um-original-sem-fundo.png",
    "sources": [
      {
        "url": "https://stream.ichibansys.com:3230/hybrid/play.m3u8",
        "name": "BR"
      }
    ],
    "number": 80
  },
  {
    "id": "pub_3",
    "name": "Adesso TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/KgetM8j.png",
    "sources": [
      {
        "url": "https://cdn.jmvstream.com/w/LVW-9715/LVW9715_12B26T62tm/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 81
  },
  {
    "id": "pub_4",
    "name": "Amazon Sat",
    "category": "Variedades",
    "logo": "https://i.imgur.com/7rjCS5i.png",
    "sources": [
      {
        "url": "https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 82
  },
  {
    "id": "pub_5",
    "name": "Angel TV Portuguese",
    "category": "Variedades",
    "logo": "https://i.imgur.com/qKLEGU7.png",
    "sources": [
      {
        "url": "https://janya-digimix.akamaized.net/vglive-sk-382409/portuese/ngrp:angelportuguese_all/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 83
  },
  {
    "id": "pub_6",
    "name": "Araruna TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/jl39ula.png",
    "sources": [
      {
        "url": "https://video05.logicahost.com.br/ararunatv/ararunatv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 84
  },
  {
    "id": "pub_7",
    "name": "Aratu On",
    "category": "Notícias",
    "logo": "https://i.imgur.com/Ht4jCab.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-9359/LVW9359_XSyReL0QVf/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 85
  },
  {
    "id": "pub_8",
    "name": "AWTV",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/2tdMyef.png",
    "sources": [
      {
        "url": "https://awtv.nuvemplay.live/hls/stream.m3u8",
        "name": "BR"
      }
    ],
    "number": 86
  },
  {
    "id": "pub_9",
    "name": "Bem Mais TV",
    "category": "TV Aberta",
    "logo": "https://bemmaistv.com.br/wp-content/uploads/2025/08/0LASAmOtt4-150x150.jpg",
    "sources": [
      {
        "url": "https://video09.logicahost.com.br/bemmaistv01/bemmaistv01/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 87
  },
  {
    "id": "pub_10",
    "name": "Canal FDR",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/7SE4CkE.png",
    "sources": [
      {
        "url": "https://v-us-01.wisestream.io/memfs/e4ade538-7924-4359-81ef-b9d4dd229e91.m3u8",
        "name": "BR"
      }
    ],
    "number": 88
  },
  {
    "id": "pub_11",
    "name": "Canal Metropolitano de Noticias",
    "category": "Notícias",
    "logo": "https://i.imgur.com/G0x4xqa.png",
    "sources": [
      {
        "url": "https://stmv5.samcast.com.br/claudio8701/claudio8701/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 89
  },
  {
    "id": "pub_12",
    "name": "Catve2",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/qiVfsfB.png",
    "sources": [
      {
        "url": "https://5b33b873179a2.streamlock.net:1443/catve2/catve2/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 90
  },
  {
    "id": "pub_13",
    "name": "Catve FM",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/w89yw36.png",
    "sources": [
      {
        "url": "https://5b33b873179a2.streamlock.net:1443/radiocamera/livestream/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 91
  },
  {
    "id": "pub_14",
    "name": "Catve Master TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/4m7Iazm.png",
    "sources": [
      {
        "url": "https://5b33b873179a2.streamlock.net:1443/mastertv/livestream/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 92
  },
  {
    "id": "pub_15",
    "name": "Chroma TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/SnaIMgj.png",
    "sources": [
      {
        "url": "https://5c483b9d1019c.streamlock.net/8054/8054/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 93
  },
  {
    "id": "pub_16",
    "name": "Classique TV",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/rHxcraT.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/classique/classique/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 94
  },
  {
    "id": "pub_17",
    "name": "Conecta Mais TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/qHwTWlz.png",
    "sources": [
      {
        "url": "https://adylnet.streampool.net/10324/live/hls/Conecta/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 95
  },
  {
    "id": "pub_18",
    "name": "ConecTV Brasil",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/XN6jjMR.png",
    "sources": [
      {
        "url": "https://stream01.msolutionbrasil.com.br/hls/conectv/live.m3u8",
        "name": "BR"
      }
    ],
    "number": 96
  },
  {
    "id": "pub_19",
    "name": "Conexao TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/CJ9SPsZ.png",
    "sources": [
      {
        "url": "https://5a57bda70564a.streamlock.net/conexaotv/conexaotv.sdp/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 97
  },
  {
    "id": "pub_20",
    "name": "Despertar TV",
    "category": "Variedades",
    "logo": "https://res.cloudinary.com/dpkehkbpv/image/upload/v1721839192/logo/mixtv/despertar_tv_ieb2l3.png",
    "sources": [
      {
        "url": "https://br.conectmy.com.br/DespertarTV/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 98
  },
  {
    "id": "pub_21",
    "name": "ElyTV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/1eHNe91.png",
    "sources": [
      {
        "url": "https://stmv1.srvsite.com/ely/ely/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 99
  },
  {
    "id": "pub_22",
    "name": "EUTV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/8PxpamC.png",
    "sources": [
      {
        "url": "https://cdn.jmvstream.com/w/LVW-8719/LVW8719_AcLVAxWy5J/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 100
  },
  {
    "id": "pub_23",
    "name": "Fala Litoral",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/NF6PL8O.png",
    "sources": [
      {
        "url": "https://5c483b9d1019c.streamlock.net/falalitoraltv/falalitoraltv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 101
  },
  {
    "id": "pub_24",
    "name": "Fonte TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/7q2BmNc.png",
    "sources": [
      {
        "url": "https://59fb88a1b1108.streamlock.net/fonte/_definst_/fontetv/chunklist_w1224511652.m3u8",
        "name": "BR"
      }
    ],
    "number": 102
  },
  {
    "id": "pub_25",
    "name": "Gospel Movie TV",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/cQN3nWt.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/gospelf/gospelf/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 103
  },
  {
    "id": "pub_26",
    "name": "ISTV (Brazil)",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/RUKVrOH.png",
    "sources": [
      {
        "url": "https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 104
  },
  {
    "id": "pub_27",
    "name": "J3NEWS TV",
    "category": "Notícias",
    "logo": "https://i.imgur.com/lezIQyL.png",
    "sources": [
      {
        "url": "https://video01.brascast.com/d92ebb4f/d92ebb4f/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 105
  },
  {
    "id": "pub_28",
    "name": "L!ke",
    "category": "Variedades",
    "logo": "https://i.imgur.com/chHsCzB.png",
    "sources": [
      {
        "url": "https://cnl-cl.otteravision.com/cnl/cl_h265/cl_h265.m3u8",
        "name": "BR"
      }
    ],
    "number": 106
  },
  {
    "id": "pub_29",
    "name": "Lamore Rock Show WebTV",
    "category": "Músicas",
    "logo": "https://www.lamorerockshowwebtv.com.br/wp-content/uploads/2024/11/logo_rockshow.avif",
    "sources": [
      {
        "url": "https://a.cdni.live/rodrigo2364/rodrigo2364/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 107
  },
  {
    "id": "pub_30",
    "name": "NickOnline Bob Esponja",
    "category": "Infantil",
    "logo": "https://x1colegal.com/nickonlinebobesponja.png",
    "sources": [
      {
        "url": "https://bob.x1colegal.com/hls/stream.m3u8",
        "name": "BR"
      }
    ],
    "number": 108
  },
  {
    "id": "pub_31",
    "name": "NTV (Brazil)",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/n79nkVC.png",
    "sources": [
      {
        "url": "https://cdn.livespanel.com/nossatv/nossatv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 109
  },
  {
    "id": "pub_32",
    "name": "O Dia TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/1LUbAVP.png",
    "sources": [
      {
        "url": "https://6836041ea1117.streamlock.net/tvodia/tvodia/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 110
  },
  {
    "id": "pub_33",
    "name": "Petlovers TV",
    "category": "Variedades",
    "logo": "https://petloverstv.com.br/storage/357/config/yqP4nOugWRxRFCmgLqXF4gRKyM9ybsAOfHgUaqPt.png",
    "sources": [
      {
        "url": "https://video04.logicahost.com.br/petloverstv/petloverstv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 111
  },
  {
    "id": "pub_34",
    "name": "Plena TV",
    "category": "Notícias",
    "logo": "https://i.imgur.com/lH4RT7b.png",
    "sources": [
      {
        "url": "https://cdn.jmvstream.com/w/LVW-9591/LVW9591_PmXtgATnaS/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 112
  },
  {
    "id": "pub_35",
    "name": "Plenitude TV",
    "category": "Variedades",
    "logo": "",
    "sources": [
      {
        "url": "https://strv.painelvox.top/plenitude/plenitude/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 113
  },
  {
    "id": "pub_36",
    "name": "RBATV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/ZWFxlU1.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-15748/LVW15748_Yed7yzLuRC/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 114
  },
  {
    "id": "pub_37",
    "name": "Red Bull TV BR",
    "category": "Esportes",
    "logo": "https://images.pluto.tv/channels/5e7cb84a172a0f0007da69e4/colorLogoPNG.png",
    "sources": [
      {
        "url": "https://d03ae6b5c6724c24867e97a3dc04934a.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-1026-WORBBRPTFAST-WHALETVPLUS/1026/hls/master/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 115
  },
  {
    "id": "pub_38",
    "name": "Rede Meio Norte",
    "category": "Variedades",
    "logo": "https://i.imgur.com/KVdTi0M.png",
    "sources": [
      {
        "url": "https://maystreaming.cloudecast.com/redemeio/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 116
  },
  {
    "id": "pub_39",
    "name": "Rede Minas",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/MtQWAHv.png",
    "sources": [
      {
        "url": "https://8hzcavccys.zoeweb.tv/redeminas/ngrp:redeminas_all/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 117
  },
  {
    "id": "pub_40",
    "name": "Rede NGT",
    "category": "Variedades",
    "logo": "https://i.imgur.com/ZFN1R4B.png",
    "sources": [
      {
        "url": "https://isaocorp.cloudecast.com/ngt/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 118
  },
  {
    "id": "pub_41",
    "name": "Rede SPTV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/kh3LGAP.png",
    "sources": [
      {
        "url": "https://video01.logicahost.com.br/websptv/websptv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 119
  },
  {
    "id": "pub_42",
    "name": "Rede TV! Mais",
    "category": "TV Aberta",
    "logo": "https://i.ibb.co/F0Tm2WP/2103f4c07b851d64b4c96955765a9a95.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/webtv/AVJ-15235/playlist/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 120
  },
  {
    "id": "pub_43",
    "name": "Retro Cartoon",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/hIlEfhl.png",
    "sources": [
      {
        "url": "https://stmv1.video.brstream.com.br/retrotv/retrotv/chunklist_w1069200121.m3u8",
        "name": "BR"
      }
    ],
    "number": 121
  },
  {
    "id": "pub_44",
    "name": "SBT Interior",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/IkZfa4j.png",
    "sources": [
      {
        "url": "https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 122
  },
  {
    "id": "pub_45",
    "name": "SBT Nova Mutum",
    "category": "TV Aberta",
    "logo": "https://upload.wikimedia.org/wikipedia/pt/d/d0/Logotipo_do_SBT_Nova_Mutum.png",
    "sources": [
      {
        "url": "https://video09.logicahost.com.br/sbtmutum/sbtmutum/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 123
  },
  {
    "id": "pub_46",
    "name": "SIC TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/mHxQyB2.png",
    "sources": [
      {
        "url": "https://parecisfmlive.brasilstream.com.br/hls/parecisfmlive/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 124
  },
  {
    "id": "pub_47",
    "name": "SOU TV",
    "category": "TV Aberta",
    "logo": "https://i.ibb.co/8cKmCNm/ezgif-com-gif-maker.png",
    "sources": [
      {
        "url": "https://video10.logicahost.com.br/soutv/soutv/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 125
  },
  {
    "id": "pub_48",
    "name": "STZ TV",
    "category": "Notícias",
    "logo": "https://i.imgur.com/SeF2I7q.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/webtv/AVJ-12952/playlist/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 126
  },
  {
    "id": "pub_49",
    "name": "TCM 10 HD",
    "category": "Notícias",
    "logo": "https://i.imgur.com/aMuMVvB.png",
    "sources": [
      {
        "url": "https://live.tcm10.com.br/tcm10hd/stream.m3u8",
        "name": "BR"
      }
    ],
    "number": 127
  },
  {
    "id": "pub_50",
    "name": "Times Brasil",
    "category": "Notícias",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Times_Brasil_CNBC_logo_2025.svg/960px-Times_Brasil_CNBC_logo_2025.svg.png",
    "sources": [
      {
        "url": "https://ssai2-ads.api.leiniao.com/global-adinsertion-api/hls/live/v2/21fdb6dd7491406bba86497a24390a25/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 128
  },
  {
    "id": "pub_51",
    "name": "TV A Critica",
    "category": "Variedades",
    "logo": "https://i.imgur.com/j51rBro.png",
    "sources": [
      {
        "url": "https://cdn.live.br1.jmvstream.com/w/LVW-20715/LVW20715_50E3x2MCm2/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 129
  },
  {
    "id": "pub_52",
    "name": "TV A Folha",
    "category": "Notícias",
    "logo": "https://i.imgur.com/I7XGMhj.png",
    "sources": [
      {
        "url": "https://video01.logicahost.com.br/tvafolha/tvafolha/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 130
  },
  {
    "id": "pub_53",
    "name": "TV Aldeia",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/rsfnv4Z.png",
    "sources": [
      {
        "url": "https://stmv1.samcast.com.br/giovane7843/giovane7843/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 131
  },
  {
    "id": "pub_54",
    "name": "TV Alianca Catarinense",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/eqmOhtP.png",
    "sources": [
      {
        "url": "https://video01.logicahost.com.br/tvalianca/tvalianca/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 132
  },
  {
    "id": "pub_55",
    "name": "TV Alternativa",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/wM9xXhc.png",
    "sources": [
      {
        "url": "https://stmv5.samcast.com.br/wagner7919/wagner7919/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 133
  },
  {
    "id": "pub_56",
    "name": "TV BRICS Portuguese",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/vLpm8tN.png",
    "sources": [
      {
        "url": "https://porbrics.mediacdn.ru/cdn/brics/portuguese/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 134
  },
  {
    "id": "pub_57",
    "name": "TV Brusque",
    "category": "Notícias",
    "logo": "https://i.imgur.com/J2EAZPS.png",
    "sources": [
      {
        "url": "https://5ad482a77183d.streamlock.net/rodrigotvbrusque.com.br/5d880199c902eb4a1e8df00d/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 135
  },
  {
    "id": "pub_58",
    "name": "TV Camara (Brazil)",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/Sdou1Ab.png",
    "sources": [
      {
        "url": "https://stream3.camara.gov.br/tv1/manifest.m3u8",
        "name": "BR"
      }
    ],
    "number": 136
  },
  {
    "id": "pub_59",
    "name": "TV Cidade Verde Cuiaba",
    "category": "Variedades",
    "logo": "https://i.imgur.com/e67h04h.png",
    "sources": [
      {
        "url": "https://televisaocidadeverde.brasilstream.com.br/hls/televisaocidadeverde/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 137
  },
  {
    "id": "pub_60",
    "name": "TV Clube",
    "category": "Variedades",
    "logo": "https://i.imgur.com/CpXjcyE.png",
    "sources": [
      {
        "url": "https://5c483b9d1019c.streamlock.net/8186/8186/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 138
  },
  {
    "id": "pub_61",
    "name": "TV Comunitaria",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/uxefHY3.png",
    "sources": [
      {
        "url": "https://5b7f3c45ab7c2.streamlock.net/8008/smil:8008.smil/playlist.m3u8?DVR=",
        "name": "BR"
      }
    ],
    "number": 139
  },
  {
    "id": "pub_62",
    "name": "TV Curuca",
    "category": "Variedades",
    "logo": "https://i.imgur.com/JdCKNZ4.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/tvcurucasp/tvcurucasp/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 140
  },
  {
    "id": "pub_63",
    "name": "TV Difusao",
    "category": "TV Aberta",
    "logo": "https://storage.googleapis.com/soultv-prod-media/media/brand/LOGO_TV_DIFUS%C3%83O_100x100px_doiivZN.png",
    "sources": [
      {
        "url": "https://tvdsoultv.acessaradios.com.br/tvdsoultv/tvdsoultv.stream/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 141
  },
  {
    "id": "pub_64",
    "name": "TV Guara",
    "category": "Variedades",
    "logo": "https://i.imgur.com/8PErNBT.png",
    "sources": [
      {
        "url": "https://video02.logicahost.com.br/tvguara23/tvguara23/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 142
  },
  {
    "id": "pub_65",
    "name": "TV Guarapari",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/eDNzwK0.png",
    "sources": [
      {
        "url": "https://video.welltecnologia.com.br/tvguarapari/tvguarapari/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 143
  },
  {
    "id": "pub_66",
    "name": "TV Life America",
    "category": "Variedades",
    "logo": "https://i.imgur.com/HZI0ilU.png",
    "sources": [
      {
        "url": "https://streaming.cloudecast.com/hls/tvlifeamerica/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 144
  },
  {
    "id": "pub_67",
    "name": "TV Litoral RN",
    "category": "TV Aberta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3e/TV_LITORAL_RN.jpg",
    "sources": [
      {
        "url": "https://5ad482a77183d.streamlock.net/tvnordesteegmail.com/tvnordesteegmail.com/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 145
  },
  {
    "id": "pub_68",
    "name": "TV Mais Marica",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/lgCRX7q.png",
    "sources": [
      {
        "url": "https://5cf4a2c2512a2.streamlock.net/tvmaismarica/tvmaismarica/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 146
  },
  {
    "id": "pub_69",
    "name": "TV Mana Brasil",
    "category": "Variedades",
    "logo": "https://i.imgur.com/AFb712e.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-brasil/smil:tvmana-brasil.smil/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 147
  },
  {
    "id": "pub_70",
    "name": "TV Marajoara",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/9d9vBN7.png",
    "sources": [
      {
        "url": "https://tv02.zas.media:1936/tvmarajoara/tvmarajoara/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 148
  },
  {
    "id": "pub_71",
    "name": "TV Metropole",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/bJyjLpg.png",
    "sources": [
      {
        "url": "https://cdn-fundacao-2110.ciclano.io:1443/fundacao-2110/fundacao-2110/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 149
  },
  {
    "id": "pub_72",
    "name": "TV Padre Cicero",
    "category": "Variedades",
    "logo": "https://i.imgur.com/Y7b29VG.png",
    "sources": [
      {
        "url": "https://video01.logicahost.com.br/tvpadrecicero/tvpadrecicero/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 150
  },
  {
    "id": "pub_73",
    "name": "TV Pantanal MS",
    "category": "Variedades",
    "logo": "https://i.imgur.com/0FOmktl.png",
    "sources": [
      {
        "url": "https://5a2b083e9f360.streamlock.net/tvpantanal/tvpantanal.sdp/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 151
  },
  {
    "id": "pub_74",
    "name": "TV Passo Fundo",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/QFE6TiV.png",
    "sources": [
      {
        "url": "https://5a57bda70564a.streamlock.net/tvpasso/tvpasso.sdp/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 152
  },
  {
    "id": "pub_75",
    "name": "TV Petropolis",
    "category": "TV Aberta",
    "logo": "https://web2.petropolis.rj.gov.br/imc/film-commission/uploads/profissional/perfil/785b645d9c574b4d88504a85dbd6ef37.png",
    "sources": [
      {
        "url": "https://video02.logicahost.com.br/tvpetropolis/tvpetropolis/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 153
  },
  {
    "id": "pub_76",
    "name": "TV Sao Raimundo",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/f34CQIG.png",
    "sources": [
      {
        "url": "https://stmv1.voxtvhd.com.br/9030/9030/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 154
  },
  {
    "id": "pub_77",
    "name": "TV Series",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/Ff5mj0o.png",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/tvserie/tvserie/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 155
  },
  {
    "id": "pub_78",
    "name": "TV Sim Cachoeiro",
    "category": "Notícias",
    "logo": "https://i.imgur.com/t5oUK3C.png",
    "sources": [
      {
        "url": "https://5cf4a2c2512a2.streamlock.net/8104/8104/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 156
  },
  {
    "id": "pub_79",
    "name": "TV Terceiro Anjo",
    "category": "Variedades",
    "logo": "https://i.imgur.com/PExKWNv.png",
    "sources": [
      {
        "url": "https://streamer1.streamhost.org/salive/GMI3anjoh/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 157
  },
  {
    "id": "pub_80",
    "name": "TV UFOP",
    "category": "TV Aberta",
    "logo": "https://raw.githubusercontent.com/daniloroxette/tvufop/refs/heads/main/images/tvufop_logo.png",
    "sources": [
      {
        "url": "https://app.tvufop.com.br/hls/tvufop.m3u8",
        "name": "BR"
      }
    ],
    "number": 158
  },
  {
    "id": "pub_81",
    "name": "TV Universal",
    "category": "Variedades",
    "logo": "https://i.imgur.com/TIsk5zN.png",
    "sources": [
      {
        "url": "https://644398c.ha.azioncdn.net/primary/tvuniversal_480p.sdp/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 159
  },
  {
    "id": "pub_82",
    "name": "TV+Pet",
    "category": "Variedades",
    "logo": "https://www.tvmaispet.com.br/images/tvpet-logo.png",
    "sources": [
      {
        "url": "https://stmv5.samcast.com.br/tvmaispet6354/tvmaispet6354/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 160
  },
  {
    "id": "pub_83",
    "name": "TVCOM Maceio",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/IE7IZzi.png",
    "sources": [
      {
        "url": "https://srv5.zcast.com.br/tvcommaceio/tvcommaceio/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 161
  },
  {
    "id": "pub_84",
    "name": "TVE RS",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/MQ6lJpS.png",
    "sources": [
      {
        "url": "https://streaming.procergs.com.br:8443/tve/stve/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 162
  },
  {
    "id": "pub_85",
    "name": "TVitape",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/XeqcwKe.png",
    "sources": [
      {
        "url": "https://stream01.msolutionbrasil.com.br/hls/tvitape/live.m3u8",
        "name": "BR"
      }
    ],
    "number": 163
  },
  {
    "id": "pub_86",
    "name": "TVLatinaSat",
    "category": "TV Aberta",
    "logo": "https://latinasat.com.br/logo.png",
    "sources": [
      {
        "url": "https://www.latinasat.com.br/hls/live/stream/index.m3u8",
        "name": "BR"
      }
    ],
    "number": 164
  },
  {
    "id": "pub_87",
    "name": "TVNBN",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/zoHBxn1.png",
    "sources": [
      {
        "url": "https://cdn.jmvstream.com/w/LVW-8410/LVW8410_uiZOVm6vz1/playlist.m3u8",
        "name": "BR"
      }
    ],
    "number": 165
  },
  {
    "id": "pub_88",
    "name": "UMA TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/m0RVb79.png",
    "sources": [
      {
        "url": "https://umatv.nuvemplay.live/hls/stream.m3u8",
        "name": "BR"
      }
    ],
    "number": 166
  },
  {
    "id": "pub_89",
    "name": "Unisul TV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/N0TvAFz.png",
    "sources": [
      {
        "url": "https://sitetv.brasilstream.com.br/hls/sitetv/index.m3u8?token=",
        "name": "BR"
      }
    ],
    "number": 167
  },
  {
    "id": "pub_90",
    "name": "VEJA+ TV",
    "category": "Notícias",
    "logo": "https://i.imgur.com/n0pxHo4.png",
    "sources": [
      {
        "url": "https://gpa-vja.otteravision.com/gpa/vja/vja.m3u8",
        "name": "BR"
      },
      {
        "url": "https://gpa-vja-samsungtvplus-br.otteravision.com/gpa/vja/vja.m3u8",
        "name": "Samsung BR"
      }
    ],
    "number": 168
  },
  {
    "id": "pub_91",
    "name": "ADB TV",
    "category": "Variedades",
    "logo": "https://i.ibb.co/HGfTJwt/ADBTV.jpg",
    "sources": [
      {
        "url": "https://live-tv.waytv.pt/adbtv/adbtv/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 169
  },
  {
    "id": "pub_92",
    "name": "ARTV",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/y00t9hr.png",
    "sources": [
      {
        "url": "https://playout172.livextend.cloud/liveiframe/_definst_/liveartvabr/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 170
  },
  {
    "id": "pub_93",
    "name": "BabyFirst",
    "category": "Infantil",
    "logo": "https://i.imgur.com/WxLHBwu.png",
    "sources": [
      {
        "url": "https://cdn.fast.jwp.services/v1/channel/1_jB6940Ei_TvhvIHDL/manifest.m3u8",
        "name": "POR"
      }
    ],
    "number": 171
  },
  {
    "id": "pub_94",
    "name": "Cartoon Network Western Europe Portugal",
    "category": "Infantil",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/960px-Cartoon_Network_2010_logo.svg.png",
    "sources": [
      {
        "url": "https://vuvuu-geil-m3u8.yaskar661.workers.dev/?url=https%3A%2F%2Fvavoo.to%2Fvavoo-iptv%2Fplay%2F327818589842dbaee1327c",
        "name": "POR"
      }
    ],
    "number": 172
  },
  {
    "id": "pub_95",
    "name": "CINDIE TV",
    "category": "Filmes e Séries",
    "logo": "https://a.jsrdn.com/hls/23208/cindie-tv/logo_20250225_222520_68.png",
    "sources": [
      {
        "url": "https://cc-hqw8u5r1nshjc.akamaized.net/scheduler/scheduleMaster/352.m3u8",
        "name": "POR"
      }
    ],
    "number": 173
  },
  {
    "id": "pub_96",
    "name": "CNN Portugal",
    "category": "Notícias",
    "logo": "https://i.imgur.com/bc6tYVZ.png",
    "sources": [
      {
        "url": "https://github.com/thomraider12/canaistvpt/raw/main/m3u8s/cnnpt.m3u8",
        "name": "POR"
      }
    ],
    "number": 174
  },
  {
    "id": "pub_97",
    "name": "EbS",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/DIIRPNN.png",
    "sources": [
      {
        "url": "https://streams.prd.commavservices.eu/live/ebs/index.m3u8",
        "name": "POR"
      },
      {
        "url": "https://streams.prd.commavservices.eu/live/ebsplus/index.m3u8",
        "name": "POR"
      }
    ],
    "number": 175
  },
  {
    "id": "pub_98",
    "name": "Famatv",
    "category": "Músicas",
    "logo": "https://i.ibb.co/tMmRp18/Fama-TV-cor-whitebg-hotizontal.jpg",
    "sources": [
      {
        "url": "https://tv2.fastcast4u.com:3310/live/famatvlive.m3u8",
        "name": "POR"
      }
    ],
    "number": 176
  },
  {
    "id": "pub_99",
    "name": "KK TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/jWOB0oU.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/ktv-angola/smil:ktv-angola.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 177
  },
  {
    "id": "pub_100",
    "name": "Kuriakos Cine",
    "category": "Filmes e Séries",
    "logo": "https://i.imgur.com/CZViCwB.jpg",
    "sources": [
      {
        "url": "https://w2.manasat.com/kcine/smil:kcine.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 178
  },
  {
    "id": "pub_101",
    "name": "Kuriakos TV",
    "category": "Variedades",
    "logo": "https://i.imgur.com/xdAW0D5.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/ktv/smil:ktv.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 179
  },
  {
    "id": "pub_102",
    "name": "Mana Igreja Online",
    "category": "Variedades",
    "logo": "https://i.imgur.com/0IUvfcJ.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/igrejaonline/smil:igrejaonline.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 180
  },
  {
    "id": "pub_103",
    "name": "MNTV",
    "category": "Notícias",
    "logo": "https://mntv.co.mz/wp-content/uploads/2025/11/Prancheta-4_1-1.png",
    "sources": [
      {
        "url": "https://www.khuwemultimedia.com/hls/mntv/mntv.m3u8",
        "name": "POR"
      }
    ],
    "number": 181
  },
  {
    "id": "pub_104",
    "name": "Muzangala TV",
    "category": "Músicas",
    "logo": "https://i.imgur.com/fBeaJoS.png",
    "sources": [
      {
        "url": "https://5cf4a2c2512a2.streamlock.net/tvmuzangala/tvmuzangala/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 182
  },
  {
    "id": "pub_105",
    "name": "Nickelodeon (Portugal)",
    "category": "Infantil",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Nickelodeon_2009_logo.svg/960px-Nickelodeon_2009_logo.svg.png",
    "sources": [
      {
        "url": "https://vuvuu-geil-m3u8.yaskar661.workers.dev/?url=https%3A%2F%2Fvavoo.to%2Fvavoo-iptv%2Fplay%2F398241518529a84217dd1f",
        "name": "POR"
      }
    ],
    "number": 183
  },
  {
    "id": "pub_106",
    "name": "ON FM",
    "category": "Músicas",
    "logo": "https://onfmwordpressfiles.ams3.digitaloceanspaces.com/wp-content/uploads/2023/03/17130121/logo-on-fm.png",
    "sources": [
      {
        "url": "https://5ce9406b73c33.streamlock.net/ONFM/livestream/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 184
  },
  {
    "id": "pub_107",
    "name": "Porto Canal",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/DwziwMY.png",
    "sources": [
      {
        "url": "https://pull-live-156-1.global.ssl.fastly.net/pc5865dc25400thmb-ea6bf03b14fa318f7133/smil:pc1-jhrgyuoqe5865db-68tkgb14fa318f7133f03.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 185
  },
  {
    "id": "pub_108",
    "name": "Radio Sines",
    "category": "Músicas",
    "logo": "https://i.imgur.com/Oe6F1nL.png",
    "sources": [
      {
        "url": "https://load-balancer.azotosolutions.com/cdnedge19/smil:live19.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 186
  },
  {
    "id": "pub_109",
    "name": "Rede Impacto Gospel TV",
    "category": "Variedades",
    "logo": "https://redeimpactogospel.com/assets/logo-512.png",
    "sources": [
      {
        "url": "https://radiosnet.site/hls/redeimpactogospeltv/redeimpactogospeltv.m3u8",
        "name": "POR"
      }
    ],
    "number": 187
  },
  {
    "id": "pub_110",
    "name": "RFPtv",
    "category": "Músicas",
    "logo": "https://i.imgur.com/I60nQuR.png",
    "sources": [
      {
        "url": "https://video03.logicahost.com.br/rfptv/rfptv/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 188
  },
  {
    "id": "pub_111",
    "name": "RTP Mundo",
    "category": "TV Aberta",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/RTP_Mundo.svg/1920px-RTP_Mundo.svg.png",
    "sources": [
      {
        "url": "https://n-5-2.eu.cdn-redge.media/livehls/oeu/mt/live/rtp_internacional/live.livx/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 189
  },
  {
    "id": "pub_112",
    "name": "SBN TV Global",
    "category": "Variedades",
    "logo": "https://i.imgur.com/NJu6oYB.png",
    "sources": [
      {
        "url": "https://watch.sardius.media/channels/Ea867F3e1F56B06/site_8D363D13Eb/live.m3u8",
        "name": "POR"
      }
    ],
    "number": 190
  },
  {
    "id": "pub_113",
    "name": "SIC Alta Definicao",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/VdPwyQv.png",
    "sources": [
      {
        "url": "https://production-fast-sic.content.okast.tv/fa2e8c4385712f9aa54bbe52b1bd9b6b/channels/d9070446-8448-455e-8075-773b1ba12562/fc831b20-f252-4e7d-8cc5-2d05f4d43c1c/media_.m3u8",
        "name": "POR"
      }
    ],
    "number": 191
  },
  {
    "id": "pub_114",
    "name": "SIC Replay",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/fj84mXz.png",
    "sources": [
      {
        "url": "https://production-fast-sic.content.okast.tv/fa2e8c4385712f9a7dce4ff2dcebac2e/channels/d9070446-8448-455e-8075-773b1ba12562/d47eae0f-ad77-414a-9a1d-2a6628ba18c3/media_.m3u8",
        "name": "POR"
      }
    ],
    "number": 192
  },
  {
    "id": "pub_115",
    "name": "TV Cidade",
    "category": "Músicas",
    "logo": "https://i.imgur.com/gmSu21X.jpg",
    "sources": [
      {
        "url": "https://stmv1.srvif.com/tvcidade/tvcidade/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 193
  },
  {
    "id": "pub_116",
    "name": "TV Mana 1",
    "category": "Variedades",
    "logo": "https://i.imgur.com/6jNqpTP.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-1/smil:tvmana-1.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 194
  },
  {
    "id": "pub_117",
    "name": "TV Mana 2",
    "category": "Variedades",
    "logo": "https://i.imgur.com/VYNjVov.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-2/smil:tvmana-2.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 195
  },
  {
    "id": "pub_118",
    "name": "TV Mana Mocambique",
    "category": "Variedades",
    "logo": "https://i.imgur.com/R5YrV5s.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/tvmana-mz/smil:tvmana-mz.smil/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 196
  },
  {
    "id": "pub_119",
    "name": "TV Show Fortaleza",
    "category": "TV Aberta",
    "logo": "https://static.wixstatic.com/media/9af6b8_e963e864c8fb40d3954f5c1c8cab1b40~mv2.png",
    "sources": [
      {
        "url": "https://stmv8.samcast.com.br/raimundoanselmolimamororo1908/raimundoanselmolimamororo1908/playlist.m3u8",
        "name": "POR"
      }
    ],
    "number": 197
  },
  {
    "id": "pub_120",
    "name": "TV Zimbo",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/SFD8CBh.png",
    "sources": [
      {
        "url": "https://sgn-cdn-video.vods2africa.com/Tv-Zimbo/index.fmp4.m3u8",
        "name": "POR"
      }
    ],
    "number": 198
  },
  {
    "id": "pub_121",
    "name": "TVI",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/H8Tgl7m.png",
    "sources": [
      {
        "url": "https://raw.githubusercontent.com/thomraider12/canaistvpt/main/m3u8s/tvi.m3u8",
        "name": "POR"
      }
    ],
    "number": 199
  },
  {
    "id": "pub_122",
    "name": "TVI Ficcao",
    "category": "Filmes e Séries",
    "logo": "https://cdn.iol.pt/img/logostvi/branco/tvificcao.png",
    "sources": [
      {
        "url": "https://raw.githubusercontent.com/thomraider12/canaistvpt/main/m3u8s/tvificcao.m3u8",
        "name": "POR"
      }
    ],
    "number": 200
  },
  {
    "id": "pub_123",
    "name": "TVI Reality",
    "category": "TV Aberta",
    "logo": "https://i.imgur.com/C9rxqA5.png",
    "sources": [
      {
        "url": "https://raw.githubusercontent.com/thomraider12/canaistvpt/main/m3u8s/tvireality.m3u8",
        "name": "POR"
      }
    ],
    "number": 201
  },
  {
    "id": "pub_124",
    "name": "V+ TVI",
    "category": "TV Aberta",
    "logo": "https://upload.wikimedia.org/wikipedia/pt/e/ef/V%2BTVI_Logo.png",
    "sources": [
      {
        "url": "https://raw.githubusercontent.com/thomraider12/canaistvpt/main/m3u8s/vmaistvi.m3u8",
        "name": "POR"
      }
    ],
    "number": 202
  },
  {
    "id": "pub_125",
    "name": "XITE Nuevo Latino",
    "category": "Músicas",
    "logo": "https://i.imgur.com/2qyl2y3.png",
    "sources": [
      {
        "url": "https://d3bsgqzbpkrvbb.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-w288eaw03izg1/XITE_Nuevo_Latino.m3u8",
        "name": "POR"
      }
    ],
    "number": 203
  },
  {
    "id": "pub_126",
    "name": "XITE Siempre Latino",
    "category": "Músicas",
    "logo": "https://i.imgur.com/bwmIEgG.png",
    "sources": [
      {
        "url": "https://d1xc25jm9e0l4b.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-xplkt8i7m24dc/XITE_Siempre_Latino.m3u8",
        "name": "POR"
      }
    ],
    "number": 204
  },
  {
    "id": "pub_127",
    "name": "Mana Church Online",
    "category": "Variedades",
    "logo": "https://i.imgur.com/FRDJSim.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/church-online/smil:church-online.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 205
  },
  {
    "id": "pub_128",
    "name": "Mana Cirkev Online",
    "category": "Variedades",
    "logo": "https://i.imgur.com/tYhXeRq.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/cirkev-online/smil:cirkev-online.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 206
  },
  {
    "id": "pub_129",
    "name": "Mana Eglise Online",
    "category": "Variedades",
    "logo": "https://i.imgur.com/xQYly8O.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/eglise-online/smil:eglise-online.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 207
  },
  {
    "id": "pub_130",
    "name": "Mana Iglesia Online",
    "category": "Variedades",
    "logo": "https://i.imgur.com/0IUvfcJ.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/iglesia-online/smil:iglesia-online.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 208
  },
  {
    "id": "pub_131",
    "name": "Mana Tserkov' Onlayn",
    "category": "Variedades",
    "logo": "https://i.imgur.com/PruXLqS.png",
    "sources": [
      {
        "url": "https://w2.manasat.com/tserkov-online/smil:tserkov-online.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 209
  },
  {
    "id": "pub_132",
    "name": "Trailers UK",
    "category": "Notícias",
    "logo": "https://i.imgur.com/RwZ1hCN.png",
    "sources": [
      {
        "url": "https://amg01821-lovetvchannels-lovemagazineuk-samsungse-p1sf1.amagi.tv/playlist/amg01821-lovetvchannels-lovemagazineuk-samsungse/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 210
  },
  {
    "id": "pub_133",
    "name": "TV Mana English",
    "category": "Variedades",
    "logo": "https://i.imgur.com/I66IkCw.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-english/smil:tvmana-english.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 211
  },
  {
    "id": "pub_134",
    "name": "TV Mana Espanhol",
    "category": "Variedades",
    "logo": "https://i.imgur.com/sUlrSwP.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-espanol/smil:tvmana-espanol.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 212
  },
  {
    "id": "pub_135",
    "name": "TV Mana Russkiy",
    "category": "Variedades",
    "logo": "https://i.imgur.com/fACHqmY.png",
    "sources": [
      {
        "url": "https://w1.manasat.com/tvmana-leste/smil:tvmana-leste.smil/playlist.m3u8",
        "name": "PT"
      }
    ],
    "number": 213
  }
];
