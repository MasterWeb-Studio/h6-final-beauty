import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-27T14:29:20.787Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Atelier Bella",
    "tagline": "Nişantaşı'nda, size ayrılmış bir saat.",
    "description": "Atelier Bella, Nişantaşı'nda cilt bakımı, saç ve masaj hizmetleri sunan premium güzellik atölyesi. Randevu için bizi arayın.",
    "language": "tr",
    "navigation": [
      {
        "label": "Ana Sayfa",
        "href": "/"
      },
      {
        "label": "Hakkımızda",
        "href": "/about"
      },
      {
        "label": "Hizmetler",
        "href": "/services"
      },
      {
        "label": "Ekibimiz",
        "href": "/team"
      },
      {
        "label": "Randevu",
        "href": "/contact"
      }
    ],
    "footer": {
      "about": "Atelier Bella, Nişantaşı'nın kalbinde bir güzellik atölyesi. Her dokunuş özen ve kişisel ritüel duygusuyla şekilleniyor.",
      "columns": [
        {
          "title": "Keşfet",
          "links": [
            {
              "label": "Hakkımızda",
              "href": "/about"
            },
            {
              "label": "Hizmetler",
              "href": "/services"
            },
            {
              "label": "Ekibimiz",
              "href": "/team"
            }
          ]
        },
        {
          "title": "Hizmetler",
          "links": [
            {
              "label": "Cilt Bakımı",
              "href": "/services"
            },
            {
              "label": "Saç Bakımı",
              "href": "/services"
            },
            {
              "label": "Masaj",
              "href": "/services"
            }
          ]
        },
        {
          "title": "Yasal",
          "links": [
            {
              "label": "KVKK",
              "href": "/kvkk"
            },
            {
              "label": "Gizlilik",
              "href": "/gizlilik"
            },
            {
              "label": "Çerez Politikası",
              "href": "/cerez"
            }
          ]
        }
      ],
      "copyright": "© 2026 Atelier Bella. Tüm hakları saklıdır.",
      "social": [
        {
          "platform": "instagram",
          "url": "https://instagram.com/reinenisantasi"
        },
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/reine"
        }
      ]
    }
  },
  "pages": [
    {
      "slug": "home",
      "title": "Ana Sayfa",
      "metaTitle": "Premium Güzellik Atölyesi — Cilt, Saç, Masaj",
      "metaDescription": "Nişantaşı'nda cilt bakımı, saç ve masaj hizmetleriyle kendinize özel bir ritüel. Atelier Bella'de randevu alın.",
      "sections": [
        {
          "type": "hero",
          "headline": "Özenin bir ritüele dönüştüğü yer.",
          "subheadline": "Nişantaşı'nda size ayrılmış bir saatte cilt, saç ve masaj; her dokunuş yalnızca sizin için.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/13068357/pexels-photo-13068357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "Sleek beauty salon interior with contemporary furniture and lighting design.",
            "credit": "Max Vakhtbovych / pexels",
            "creditUrl": "https://www.pexels.com/@artbovich",
            "color": "#63666B",
            "width": 7360,
            "height": 4912
          }
        },
        {
          "type": "about",
          "headline": "Bir Atölyenin Sessiz Özeni",
          "body": [
            "Atelier Bella, güzelliği bir ritüele dönüştüren bir atölye. Nişantaşı'nın kalbinde, her detay sizin için düşünülmüş bir alanda; cilt bakımından saça, masajdan kişisel bakım seanslarına kadar uzanan bir deneyim sunuyoruz.",
            "Burada zaman yavaşlar. Her randevu, size ayrılmış bir saate dönüşür."
          ],
          "variant": "with-image",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/11024140/pexels-photo-11024140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "A serene and modern spa treatment room complete with precision laser equipment and elegant decor.",
            "credit": "MIKE GIOVINAZZO / pexels",
            "creditUrl": "https://www.pexels.com/@mike-giovinazzo-172084658",
            "color": "#A39B98",
            "width": 5000,
            "height": 3615
          }
        },
        {
          "type": "feature-grid",
          "headline": "Atelier Bella Farkı",
          "items": [
            {
              "icon": "Sparkles",
              "title": "Kişiye Özel Protokoller",
              "description": "Her cilt farklı bir dil konuşur. Bakım protokolleriniz size özel hazırlanır."
            },
            {
              "icon": "Leaf",
              "title": "Seçkin Ürün Kadrosu",
              "description": "Yalnızca cildinizin hak ettiği formüller; etkinliği kanıtlanmış markalar."
            },
            {
              "icon": "Clock",
              "title": "Zamanınıza Saygı",
              "description": "Randevularınız dakikası dakikasına planlanır; bekleme süresi olmaz."
            },
            {
              "icon": "Heart",
              "title": "Uzman ve Sıcak Eller",
              "description": "Deneyimli ekibimiz her dokunuşu özenle, her seanı içtenlikle sunar."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "services",
          "headline": "Hizmetlerimiz",
          "items": [
            {
              "title": "Cilt Bakımı",
              "description": "Derin temizleme, nemlendirme ve yenileyici seanslarla cildiniz arınır, ışıldar."
            },
            {
              "title": "Saç Bakımı",
              "description": "Renk, kesim ve onarıcı bakım; saçlarınız için özenle tasarlanmış bir deneyim."
            },
            {
              "title": "Masaj",
              "description": "Rahatlatıcı ve yeniden enerji veren masaj seanslarıyla bedeniniz dinlenir."
            },
            {
              "title": "Kişisel Bakım Ritüeli",
              "description": "Cilt, saç ve masajı bir araya getiren bütünsel bir özen deneyimi."
            }
          ],
          "variant": "table"
        },
        {
          "type": "testimonials",
          "headline": "Konuklarımızın kelimeleriyle",
          "items": [
            {
              "quote": "Her ziyaretimde kendimi yeni tanışmış gibi değil, beklenmiş gibi hissediyorum. Saçımdan en sevdiğim çayıma kadar her şeyi hatırlıyorlar.",
              "author": "Elif A.",
              "role": "Düzenli konuk",
              "_isPlaceholder": true
            },
            {
              "quote": "Salon değil, adeta bir kaçış noktası. Yapılan bakım kadar, orada geçirdiğim o sessiz bir saat de iyi geliyor.",
              "author": "Merve T.",
              "role": "Konuk",
              "_isPlaceholder": true
            },
            {
              "quote": "Aceleye getirilmeden, gerçekten dinlenerek yapılan bakımı uzun süredir arıyordum. Artık başka yere gitmiyorum.",
              "author": "Selin K.",
              "role": "Düzenli konuk",
              "_isPlaceholder": true
            }
          ]
        },
        {
          "type": "module-home",
          "module": "team",
          "variant": "team-grid-3col",
          "headline": "Uzman Ellerimiz",
          "description": "Her biri alanında uzmanlaşmış, özenle seçilmiş bir kadro.",
          "count": 6,
          "selectionLogic": "manual"
        },
        {
          "type": "module-home",
          "module": "gallery",
          "variant": "gallery-masonry-6",
          "headline": "Atölyeden Kareler",
          "count": 6
        },
        {
          "type": "cta",
          "headline": "Elleriniz bu özeni hak ediyor.",
          "subheadline": "Nişantaşı'nda, yalnızca size ayrılmış bir saatin sessizliğine davetlisiniz.",
          "primaryCta": {
            "label": "Yerinizi Ayırtın",
            "href": "/contact"
          },
          "variant": "banner",
          "image": {
            "type": "remote",
            "url": "https://images.unsplash.com/photo-1597999709389-e29dc41e218a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzA1NTV8MHwxfHNlYXJjaHwzfHxoYW5kcyUyMG1hbmljdXJlJTIwY2xvc2UtdXAlMjBlbGVnYW50fGVufDF8MHx8fDE3NzcyOTg3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "alt": "a woman's hands with a manicured manicure",
            "credit": "Kevin kevin / unsplash",
            "creditUrl": "https://unsplash.com/@0x00kevin",
            "color": "#594040",
            "width": 5946,
            "height": 3964
          }
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda — Atelier Bella'nin Hikayesi",
      "metaDescription": "Atelier Bella, Nişantaşı'nda güzelliği kişisel bir ritüele dönüştüren premium güzellik atölyesi. Hikayemizi keşfedin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Bir Ritüelin Başladığı Yer",
          "subheadline": "Nişantaşı'nın kalbinde, özenin ve estetiğin buluştuğu atölye.",
          "variant": "centered"
        },
        {
          "type": "about",
          "headline": "Atelier Bella Nasıl Doğdu?",
          "body": [
            "Atelier Bella, güzellik bakımını bir zorunluluktan öte, kişisel bir ritüele dönüştürme arzusundan doğdu. Nişantaşı'nın estetik dokusuna uygun bir atölye kurmak; her misafiri gerçekten dinleyen, ona özel bir deneyim tasarlayan bir alan yaratmak istedik.",
            "Bugün Atelier Bella; cilt bakımı, saç ve masaj hizmetleriyle, her ziyareti küçük ama anlamlı bir kaçışa dönüştürüyor."
          ],
          "variant": "with-image",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/33412989/pexels-photo-33412989.png?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "Elegant beauty salon interior with minimalist design and calming ambiance for relaxation and pampering.",
            "credit": "The Ghazi / pexels",
            "creditUrl": "https://www.pexels.com/@the-ghazi-2152398165",
            "color": "#BFB5A7",
            "width": 2560,
            "height": 1623
          }
        },
        {
          "type": "feature-grid",
          "headline": "Çalışma Biçimimiz",
          "items": [
            {
              "icon": "Compass",
              "title": "Dinleyerek Başlarız",
              "description": "Her seans bir sohbetle açılır; ihtiyaçlarınızı anlamadan dokunmayız."
            },
            {
              "icon": "Layers",
              "title": "Protokol, Size Göre",
              "description": "Standart reçeteler yerine cildinizin ve ruh halinizin gerektirdiği bakım."
            },
            {
              "icon": "Award",
              "title": "Kalite, Taviz Vermez",
              "description": "Kullandığımız her ürün titizlikle seçilir; etkinlik ve güvenlik önce gelir."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "cta",
          "headline": "Sizi tanımak isteriz.",
          "subheadline": "İlk randevunuzu alın; Atelier Bella'yi bizzat hissedin.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "banner"
        }
      ]
    },
    {
      "slug": "services",
      "title": "Hizmetler",
      "metaTitle": "Hizmetler — Cilt Bakımı, Saç ve Masaj",
      "metaDescription": "Atelier Bella'de cilt bakımı, saç bakımı ve masaj hizmetleri. Nişantaşı'nda size özel randevu alın.",
      "sections": [
        {
          "type": "hero",
          "headline": "Her Dokunuşun Arkasında Bir Özen Var",
          "subheadline": "Cilt, saç ve beden için özenle tasarlanmış hizmetler.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Uzmanlık Alanlarımız",
          "items": [
            {
              "title": "Cilt Bakımı",
              "description": "Derin temizleme, nemlendirme, arındırma ve yenileyici seanslar. Cildinizin ihtiyacına göre kişiselleştirilen protokollerle her ziyaret farklı, her sonuç görünür.",
              "bullets": [
                "Derin gözenek temizliği",
                "Nemlendirici ve onarıcı maske",
                "Kişiselleştirilmiş serum uygulaması",
                "Işıltı veren son adım bakımı"
              ]
            },
            {
              "title": "Saç Bakımı",
              "description": "Kesim, renk ve onarıcı bakım uygulamaları. Saçınızın yapısına uygun teknikler ve özenle seçilmiş ürünlerle sonuç hem görünür hem hissedilir.",
              "bullets": [
                "Kesim ve şekillendirme",
                "Renk ve röfle uygulaması",
                "Onarıcı keratin bakımı",
                "Saç derisi masajı"
              ]
            },
            {
              "title": "Masaj",
              "description": "Rahatlatıcı İsveç masajından derin doku çalışmasına uzanan seanslar. Bedeninizin ihtiyacına göre yoğunluk ve teknik belirlenir.",
              "bullets": [
                "Rahatlatıcı İsveç masajı",
                "Derin doku masajı",
                "Aromaterapi masajı",
                "Sırt ve boyun odaklı seans"
              ]
            },
            {
              "title": "Kişisel Bakım Ritüeli",
              "description": "Cilt bakımı, masaj ve saç bakımını bir araya getiren bütünsel bir deneyim. Kendinize ayırdığınız özel bir gün için tasarlandı.",
              "bullets": [
                "Kişiselleştirilmiş cilt seanı",
                "Rahatlatıcı masaj",
                "Saç bakımı ve şekillendirme",
                "Çay ve dinlenme molası"
              ]
            }
          ],
          "variant": "table"
        },
        {
          "type": "cta",
          "headline": "Hangi hizmet sizi çekiyor?",
          "subheadline": "Randevu alın; size en uygun seanı birlikte belirleyelim.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "banner"
        },
        {
          "type": "faq",
          "headline": "Sık Sorulan Sorular",
          "items": [
            {
              "question": "Randevu nasıl alıyorum?",
              "answer": "İletişim formundan veya telefonla arayarak randevu oluşturabilirsiniz. Uygun saatleri size gün içinde iletiyoruz.",
              "_isPlaceholder": true
            },
            {
              "question": "İlk randevumda ne olur?",
              "answer": "Kısa bir sohbetle başlıyoruz: saç/cilt tipinizi, beklentilerinizi ve geçmiş bakım alışkanlıklarınızı konuşuyor, size özel bir plan çıkarıyoruz.",
              "_isPlaceholder": true
            },
            {
              "question": "Hijyen ve sterilizasyon nasıl sağlanıyor?",
              "answer": "Tüm aletlerimiz tek kullanımlık veya yüksek sıcaklıkta sterilize ediliyor. Her konuktan sonra koltuk ve çalışma alanı yeniden hazırlanıyor.",
              "_isPlaceholder": true
            },
            {
              "question": "Ücretlendirme nasıl?",
              "answer": "Hizmet listemizde yaklaşık fiyat aralıklarını görebilirsiniz. Kesin tutar bakımın detayına göre değişir; randevudan önce net bilgi veriyoruz.",
              "_isPlaceholder": true
            },
            {
              "question": "Kombine bakım alınabilir mi?",
              "answer": "Evet. Saç, cilt ve tırnak bakımını tek bir ziyarette birleştirebilirsiniz. Süreyi buna göre planlıyoruz.",
              "_isPlaceholder": true
            },
            {
              "question": "Randevumu iptal etmem gerekirse?",
              "answer": "Randevunuzdan en az 24 saat önce haber verirseniz ek ücret yansıtılmaz. Böylece başka bir konuk için değerlendirebiliriz.",
              "_isPlaceholder": true
            }
          ]
        }
      ]
    },
    {
      "slug": "contact",
      "title": "Randevu",
      "metaTitle": "Randevu Alın — Nişantaşı Atelier Bella",
      "metaDescription": "Atelier Bella'de randevu almak için formu doldurun. Nişantaşı'nda cilt bakımı, saç ve masaj için sizi bekliyoruz.",
      "sections": [
        {
          "type": "hero",
          "headline": "Nişantaşı'nda bir saat, size ayrılsın.",
          "subheadline": "Randevunuzu bırakın; en kısa sürede dönelim.",
          "variant": "centered"
        },
        {
          "type": "appointment",
          "headline": "Randevu Alın",
          "subheadline": "24 saat içinde sizi arayarak randevunuzu onaylıyoruz.",
          "note": "Pazar günleri kapalıyız. Tercih ettiğiniz saat doluysa alternatif öneririz."
        }
      ]
    },
    {
      "slug": "team",
      "title": "Ekibimiz",
      "metaTitle": "Uzman Ekibimiz — Atelier Bella",
      "metaDescription": "Atelier Bella'nin uzman güzellik ekibiyle tanışın. Cilt, saç ve masaj alanında deneyimli, özenli eller.",
      "sections": [
        {
          "type": "hero",
          "headline": "Sizi En İyi Anlayan Eller",
          "subheadline": "Alanında uzmanlaşmış, her dokunuşta özen gösteren bir kadro.",
          "variant": "centered"
        },
        {
          "type": "team",
          "headline": "Ekibimiz",
          "description": "Her biri bakım alanında uzmanlaşmış; sizi tanımak için zaman ayıran bir ekip.",
          "items": [
            {
              "name": "Zeynep Y.",
              "role": "Kurucu & Saç Stilisti",
              "bio": "15 yıllık saç kesim ve renklendirme deneyimi. Doğal, taşıması kolay kesimlerde uzman.",
              "avatarHint": "woman-brown-hair-smiling",
              "_isPlaceholder": true
            },
            {
              "name": "Deniz A.",
              "role": "Cilt Bakım Uzmanı",
              "bio": "Hassas ciltler ve yaşlanma karşıtı protokoller üzerine eğitimli. Nazik formülleri tercih ediyor.",
              "avatarHint": "woman-short-hair-glasses",
              "_isPlaceholder": true
            },
            {
              "name": "Burak K.",
              "role": "Renk & Balyaj Uzmanı",
              "bio": "Saç yapısına uygun balyaj ve ombre tekniklerinde uzman; doğal geçişlerin peşinde.",
              "avatarHint": "man-beard-apron",
              "_isPlaceholder": true
            },
            {
              "name": "Ece M.",
              "role": "Tırnak Bakım Uzmanı",
              "bio": "Klasik manikürden kalıcı oje uygulamalarına kadar geniş bir çalışma yelpazesi.",
              "avatarHint": "woman-bun-hair",
              "_isPlaceholder": true
            }
          ]
        },
        {
          "type": "cta",
          "headline": "Ekibimizle tanışmaya hazır mısınız?",
          "subheadline": "Randevu alın; size en uygun uzmanı birlikte seçelim.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "banner"
        }
      ]
    }
  ]
};
