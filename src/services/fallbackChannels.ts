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
  }
];
