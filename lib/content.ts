import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-25T14:27:07.686Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Maison Nişantaşı",
    "tagline": "Kendinize ayırdığınız o özel saat.",
    "description": "Nişantaşı'nda premium cilt bakımı, saç ve masaj ritüelleri. Lüks ve sakin bir kaçış noktasında kişisel ilgiyle hazırlanmış deneyimler.",
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
        "label": "Uzmanlarımız",
        "href": "/team"
      },
      {
        "label": "Randevu",
        "href": "/contact"
      }
    ],
    "footer": {
      "about": "Maison Nişantaşı, İstanbul'un kalbinde kişisel bakımı bir ritüele dönüştüren premium güzellik stüdyosudur. Her ziyaret, size özel tasarlanmış bir deneyimdir.",
      "columns": [
        {
          "title": "Keşfedin",
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
              "label": "Uzmanlarımız",
              "href": "/team"
            }
          ]
        },
        {
          "title": "Ziyaret",
          "links": [
            {
              "label": "Randevu Al",
              "href": "/contact"
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
      "copyright": "© 2026 Maison Nişantaşı. Tüm hakları saklıdır.",
      "social": [
        {
          "platform": "instagram",
          "url": "https://instagram.com/maisonnisantasi"
        },
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/maisonnisantasi"
        }
      ]
    }
  },
  "pages": [
    {
      "slug": "home",
      "title": "Ana Sayfa",
      "metaTitle": "Maison Nişantaşı | Premium Güzellik & Bakım Ritüelleri",
      "metaDescription": "Nişantaşı'nda cilt bakımı, saç ve masaj ritüelleri. Lüks, sakin ve size özel bir kaçış noktası sizi bekliyor.",
      "sections": [
        {
          "type": "hero",
          "headline": "Nişantaşı'nın en sakin lüksü, sizi bekliyor.",
          "subheadline": "Cildinize ve saçınıza dokunan özenli ritüeller — her ziyaret, yalnızca size adanmış bir saat.",
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
          "type": "feature-grid",
          "headline": "Farkımız Ne?",
          "items": [
            {
              "icon": "Sparkles",
              "title": "Kişiye Özel Ritüel",
              "description": "Her ziyaret, cilt tipinize ve o günkü halinize göre yeniden tasarlanır."
            },
            {
              "icon": "Leaf",
              "title": "Seçkin Ürün Kadrosu",
              "description": "Yalnızca premium, cilde saygılı formülasyonlar kullanıyoruz."
            },
            {
              "icon": "Clock",
              "title": "Zamanınıza Saygı",
              "description": "Randevular dakikası dakikasına; bekleme yok, acele yok."
            },
            {
              "icon": "MapPin",
              "title": "Nişantaşı'nın Kalbinde",
              "description": "Şehrin gürültüsünden soyutlanmış, butik ve sakin bir atmosfer."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "about",
          "headline": "Bir Ritüelin Doğuşu",
          "body": [
            "Maison Nişantaşı, güzelliği bir zorunluluk değil, kendinize verdiğiniz en değerli hediye olarak görenlerin mekânıdır. Her detay — ışıktan kokuya, dokunuştan sessizliğe — sizi yavaşlatmak için kurgulandı.",
            "Uzman kadromuz, her ziyareti sizinle birlikte şekillendirir. Burada standart bir protokol değil, size ait bir deneyim yaşarsınız."
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
          "type": "services",
          "headline": "Ritüellerimiz",
          "items": [
            {
              "title": "Cilt Bakımı",
              "description": "Cilt tipinize özel derin temizleme, nemlendirme ve yenileme seansları. Işıltılı ve dinlenmiş bir cilt için."
            },
            {
              "title": "Saç Bakımı & Şekillendirme",
              "description": "Saç analizinden bakım uygulamasına, kesimden şekillendirmeye — saçınıza hak ettiği özen."
            },
            {
              "title": "Masaj & Vücut Ritüeli",
              "description": "Aromatik yağlarla derin doku masajı ve vücut bakımı. Gerilimi bırakın, yenilenin."
            },
            {
              "title": "Kombin Paketler",
              "description": "Cilt, saç ve masajı bir araya getiren özel günler. Kendinize yarım gün ayırın."
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
          "type": "cta",
          "headline": "Kendinize bir saat ayırın.",
          "subheadline": "Randevunuzu alın — ritüelinizin geri kalanını biz hazırlayalım.",
          "primaryCta": {
            "label": "Randevunuzu Alın",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda | Maison Nişantaşı",
      "metaDescription": "Maison Nişantaşı'nın hikâyesi: Nişantaşı'nda lüks ve özenle kurulan bir güzellik ritüelinin arka planı.",
      "sections": [
        {
          "type": "hero",
          "headline": "Özenin bir adresi var.",
          "subheadline": "Nişantaşı'nın en sakin köşesinde, her detayı düşünülmüş bir deneyim.",
          "variant": "centered"
        },
        {
          "type": "about",
          "headline": "Nasıl Başladı?",
          "body": [
            "Maison Nişantaşı, güzellik bakımının bir rutinden çok bir ritüele dönüşebileceğine inanan bir ekip tarafından kuruldu. Nişantaşı'nın zarif dokusuna uygun, sakin ve butik bir alan yaratmak istedik.",
            "Bugün, cilt bakımı, saç ve masaj alanlarında uzman ekibimizle her ziyareti kişiye özel bir deneyime dönüştürüyoruz. Standart protokoller değil, sizi dinleyerek şekillenen ritüeller."
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
          "headline": "Değerlerimiz",
          "items": [
            {
              "icon": "Heart",
              "title": "Kişisel İlgi",
              "description": "Her müşterimize ayrı zaman ve dikkat ayırıyoruz; kalabalık randevu kuyruğu yok."
            },
            {
              "icon": "Shield",
              "title": "Güvenilir Uygulama",
              "description": "Cilde saygılı ürünler ve kanıtlanmış teknikler — hiçbir zaman deneysel değil."
            },
            {
              "icon": "Compass",
              "title": "Sürekli Gelişim",
              "description": "Ekibimiz düzenli eğitimlerle güzellik alanındaki yenilikleri yakından takip eder."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "cta",
          "headline": "Sizi tanımak isteriz.",
          "subheadline": "İlk ziyaretinizde size özel bir bakım analizi yapıyoruz.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    },
    {
      "slug": "services",
      "title": "Hizmetler",
      "metaTitle": "Hizmetler | Maison Nişantaşı",
      "metaDescription": "Cilt bakımı, saç, masaj ve kombin ritüeller. Nişantaşı'nda size özel premium güzellik deneyimleri.",
      "sections": [
        {
          "type": "hero",
          "headline": "Cildinize, saçınıza, ruhunuza.",
          "subheadline": "Her ritüel ihtiyacınıza göre şekillenir. Standart yok, yalnızca siz varsınız.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Uzmanlık Alanlarımız",
          "items": [
            {
              "title": "Cilt Bakımı Ritüelleri",
              "description": "Derin temizleme, nemlendirme, aydınlatma ve yaşlanma karşıtı seanslar. Cilt analizinizle başlayan, size özel formüle edilen bir bakım protokolü."
            },
            {
              "title": "Saç Bakımı & Tasarım",
              "description": "Saç analizi, onarıcı bakım uygulamaları, kesim ve şekillendirme. Saçınızın gerçek potansiyelini ortaya çıkarmak için uzman ellerde bir deneyim."
            },
            {
              "title": "Masaj & Aromatik Ritüeller",
              "description": "Derin doku masajı, aromaterapik vücut bakımı ve rahatlama seansları. Zihin ve beden için tam bir sıfırlama."
            },
            {
              "title": "Özel Günler & Kombin",
              "description": "Birden fazla hizmeti bir araya getiren tam gün ya da yarım gün paketleri. Doğum günleri, özel davetler veya yalnızca kendinize ayırdığınız bir gün için."
            }
          ],
          "variant": "table"
        },
        {
          "type": "cta",
          "headline": "Hangi ritüel sizi bekliyor?",
          "subheadline": "Randevu alın, geri kalanını birlikte planlayalım.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "inline"
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
      "metaTitle": "Randevu Alın | Maison Nişantaşı",
      "metaDescription": "Maison Nişantaşı'nda randevu alın. Nişantaşı, İstanbul. Cilt bakımı, saç ve masaj için uygun zamanı seçin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Sizi bekliyoruz.",
          "subheadline": "Randevunuzu alın, kapıdan adım attığınız an her şey hazır olsun.",
          "variant": "centered"
        },
        {
          "type": "appointment",
          "headline": "Randevu Alın",
          "subheadline": "En kısa sürede size dönüp randevunuzu onaylıyoruz.",
          "note": "Pazar günleri kapalıyız. Tercih ettiğiniz saat müsait değilse sizi arayıp alternatif öneririz.",
          "services": [
            "Cilt Bakımı Ritüeli",
            "Saç Bakımı & Tasarım",
            "Masaj & Aromatik Ritüel",
            "Kombin Paket"
          ]
        }
      ]
    },
    {
      "slug": "team",
      "title": "Uzmanlarımız",
      "metaTitle": "Uzmanlarımız | Maison Nişantaşı",
      "metaDescription": "Maison Nişantaşı'nın uzman ekibiyle tanışın. Cilt, saç ve masaj alanlarında deneyimli, kişisel ilgiyle çalışan profesyoneller.",
      "sections": [
        {
          "type": "hero",
          "headline": "Sizi en iyi ellere bırakın.",
          "subheadline": "Her uzmanımız alanında derinleşmiş, sürekli gelişen bir profesyoneldir.",
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
          "headline": "Uzmanınızla tanışmaya hazır mısınız?",
          "subheadline": "Randevu alın, size en uygun uzmanı birlikte belirleyelim.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    }
  ]
};
