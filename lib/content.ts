import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-21T11:43:09.277Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Atelier Bella",
    "tagline": "Bakım bir lüks değil, kendine bir söz.",
    "description": "Atelier Bella'da cilt bakımı ve saç bakımı bir ritüele dönüşür. Premium hizmetler, özenli dokunuşlar ve lüks bir atmosfer sizi bekliyor.",
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
      "about": "Atelier Bella, her ziyareti kişisel bir kaçamağa dönüştüren premium bir güzellik adresidir. Cilt ve saç bakımında özenli deneyimler sunuyoruz.",
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
          "title": "Randevu",
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
              "label": "Gizlilik Politikası",
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
          "url": "https://instagram.com/atelierbella"
        },
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/atelierbella"
        }
      ]
    }
  },
  "pages": [
    {
      "slug": "home",
      "title": "Ana Sayfa",
      "metaTitle": "Atelier Bella | Premium Güzellik & Bakım Salonu",
      "metaDescription": "Atelier Bella'da cilt bakımı ve saç bakımı bir ritüele dönüşür. Lüks atmosfer, uzman eller ve size özel deneyimler.",
      "sections": [
        {
          "type": "hero",
          "headline": "Kendinize döndüğünüz yer.",
          "subheadline": "Her dokunuşta bir his, her ziyarette yalnızca size ait bir an.",
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
          "headline": "Neden Atelier Bella?",
          "items": [
            {
              "icon": "Sparkles",
              "title": "Kişiye Özel Bakım",
              "description": "Her seans, cildinizin ve saçınızın ihtiyacına göre ayrıca hazırlanır."
            },
            {
              "icon": "Leaf",
              "title": "Seçkin Ürünler",
              "description": "Yalnızca premium, cilde duyarlı markalarla çalışıyoruz."
            },
            {
              "icon": "Clock",
              "title": "Kolay Randevu",
              "description": "Online randevu sistemiyle zamanınızı en rahat şekilde planlayın."
            },
            {
              "icon": "Heart",
              "title": "Sakin Bir Atmosfer",
              "description": "Her detay, sizi günlük koşuşturmadan uzaklaştırmak için düşünüldü."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "about",
          "headline": "Bir Ritüelin Adresi",
          "body": [
            "Atelier Bella, bakımı bir görev olmaktan çıkarıp kendinize verdiğiniz en güzel söze dönüştürmek için kuruldu. Yumuşak ışıklar, özenle seçilmiş dokular ve deneyimli eller — her şey sizi karşılamak için burada.",
            "Cilt bakımından saç ritüellerine uzanan hizmet yelpazesiyle, her ziyarette kendinizi yeniden keşfetmenizi sağlıyoruz."
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
          "headline": "Sunduğumuz Deneyimler",
          "items": [
            {
              "title": "Cilt Bakımı Ritüeli",
              "description": "Derin temizleme, nemlendirme ve cilt tipine özel serum uygulamalarını kapsayan bütünsel bir cilt bakım seansı."
            },
            {
              "title": "Saç Bakımı & Şekillendirme",
              "description": "Saç yapısını güçlendiren bakım protokolleri ve profesyonel şekillendirme hizmetleri."
            },
            {
              "title": "Makyaj & Özel Gün",
              "description": "Günlük makyajdan özel gün hazırlığına, cildinizin ışıltısını öne çıkaran uygulamalar."
            },
            {
              "title": "El & Tırnak Bakımı",
              "description": "Nemlendirici el bakımı ve kalıcı oje uygulamalarıyla tamamlanan özenli bir bakım deneyimi."
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
          "headline": "Bakım bir lüks değil, kendine bir söz.",
          "subheadline": "Bir randevuyla başlar — sessiz, özenli, yalnızca senin için.",
          "primaryCta": {
            "label": "Randevu Alın",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda | Atelier Bella",
      "metaDescription": "Atelier Bella'nın hikayesini, değerlerini ve sizi karşılayan uzman ekibini keşfedin. Bakım burada bir ritüele dönüşür.",
      "sections": [
        {
          "type": "hero",
          "headline": "Her detay, senin için düşünüldü.",
          "subheadline": "Atelier Bella, güzelliği bir deneyim olarak yeniden tanımlamak için doğdu.",
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/7195812/pexels-photo-7195812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "Backwash chair with sink placed near shelves with cosmetology products and reception desk in stylish beauty salon with decorated walls",
            "credit": "Max Vakhtbovych / pexels",
            "creditUrl": "https://www.pexels.com/@artbovich",
            "color": "#8D837A",
            "width": 7111,
            "height": 4746
          }
        },
        {
          "type": "about",
          "headline": "Bakımın Ötesinde Bir Yer",
          "body": [
            "Atelier Bella, kendine ayırdığı zamanın kalitesine önem veren kadınlar için tasarlandı. Salonun her köşesi, ziyaretçisine huzur ve özen hissettirmek amacıyla şekillendirildi — doğru ışıktan seçilen kokuya, kullanılan ürünlerden dokunuş biçimine kadar.",
            "Ekibimiz, teknik uzmanlığı sıcak bir karşılamayla buluşturuyor. Burada her seans bir prosedür değil, size özel bir ritüel."
          ],
          "variant": "with-image",
          "image": {
            "type": "remote",
            "url": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzA1NTV8MHwxfHNlYXJjaHwyfHxiZWF1dHklMjBwcm9mZXNzaW9uYWwlMjBhcHBseWluZyUyMHNraW5jYXJlJTIwdHJlYXRtZW50JTIwY2xvc2UlMjB1cHxlbnwxfDB8fHwxNzc2NzcxNzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            "alt": "man wearing mud mask",
            "credit": "Rosa Rafael / unsplash",
            "creditUrl": "https://unsplash.com/@rosarafael",
            "color": "#d9d9d9",
            "width": 6000,
            "height": 4000
          }
        },
        {
          "type": "feature-grid",
          "headline": "Değerlerimiz",
          "items": [
            {
              "icon": "Compass",
              "title": "Özen Her Adımda",
              "description": "Randevudan seansa, seansın sonrasına kadar her temas noktasında sizi düşünüyoruz."
            },
            {
              "icon": "Award",
              "title": "Uzman Ellerde Güven",
              "description": "Ekibimiz, alanında deneyimli ve sürekli kendini geliştiren güzellik uzmanlarından oluşur."
            },
            {
              "icon": "Layers",
              "title": "Bütünsel Yaklaşım",
              "description": "Cilt, saç ve genel bakımı birbirini tamamlayan bir bütün olarak görüyoruz."
            }
          ],
          "variant": "icon-top"
        },
        {
          "type": "cta",
          "headline": "Sizi tanımak isteriz.",
          "subheadline": "İlk ziyaretinizi planlamak için randevu alın.",
          "primaryCta": {
            "label": "Randevu Al",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    },
    {
      "slug": "services",
      "title": "Hizmetler",
      "metaTitle": "Hizmetler | Atelier Bella",
      "metaDescription": "Atelier Bella'nın cilt bakımı, saç bakımı, makyaj ve tırnak hizmetlerini keşfedin. Her biri size özel, her biri bir deneyim.",
      "sections": [
        {
          "type": "hero",
          "headline": "Bakım, bir deneyim olarak.",
          "subheadline": "Her hizmet, sizi en iyi hissettirmek için özenle tasarlandı.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Uzmanlık Alanlarımız",
          "items": [
            {
              "title": "Cilt Bakımı Ritüeli",
              "description": "Cilt analizinden başlayan, derin temizleme, peeling, serum ve maske uygulamalarını kapsayan kişiselleştirilmiş bir seans. Cildinizin ihtiyacına göre şekillenir."
            },
            {
              "title": "Saç Bakımı & Şekillendirme",
              "description": "Saç yapısını güçlendiren keratin, nemlendirme ve onarım protokolleri. Kesim ve şekillendirme hizmetleriyle tamamlanır."
            },
            {
              "title": "Makyaj & Özel Gün",
              "description": "Günlük ışıltıdan özel gün hazırlığına uzanan makyaj uygulamaları. Cildinizin dokusunu ve tonunu öne çıkaran bir yaklaşımla."
            },
            {
              "title": "El & Tırnak Bakımı",
              "description": "Nemlendirici el masajı, tırnak şekillendirme ve kalıcı oje uygulamalarını kapsayan bütünsel bir bakım deneyimi."
            }
          ],
          "variant": "table"
        },
        {
          "type": "cta",
          "headline": "Hangi deneyimle başlamak istersiniz?",
          "subheadline": "Uzmanlarımız size en uygun hizmeti birlikte belirlesin.",
          "primaryCta": {
            "label": "Randevu Al",
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
      "metaTitle": "Randevu Al | Atelier Bella",
      "metaDescription": "Atelier Bella'da randevu almak için formu doldurun. Cilt bakımı, saç bakımı ve daha fazlası için sizi bekliyoruz.",
      "sections": [
        {
          "type": "hero",
          "headline": "Sizi bekliyoruz.",
          "subheadline": "Randevunuzu alın, gerisini biz düşünelim.",
          "variant": "centered"
        },
        {
          "type": "appointment",
          "headline": "Randevu Alın",
          "subheadline": "En kısa sürede size dönüş yapıyoruz.",
          "note": "Pazar günleri kapalıyız. Tercih ettiğiniz saat müsait değilse sizi arayıp alternatif öneririz."
        }
      ]
    },
    {
      "slug": "team",
      "title": "Ekibimiz",
      "metaTitle": "Ekibimiz | Atelier Bella",
      "metaDescription": "Atelier Bella'nın uzman güzellik ekibiyle tanışın. Deneyimli eller, sıcak bir karşılama ve size özel bakım anlayışı.",
      "sections": [
        {
          "type": "hero",
          "headline": "Uzman eller, sıcak bir karşılama.",
          "subheadline": "Ekibimiz, her ziyareti unutulmaz kılmak için burada.",
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/5177990/pexels-photo-5177990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "A professional makeup artist shapes a woman's eyebrows in a bright beauty studio.",
            "credit": "Antoni Shkraba Studio / pexels",
            "creditUrl": "https://www.pexels.com/@shkrabaanthony",
            "color": "#B69E87",
            "width": 4000,
            "height": 2667
          }
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
          "subheadline": "İlk randevunuzu alın, size en uygun uzmanı birlikte belirleyelim.",
          "primaryCta": {
            "label": "Randevu Al",
            "href": "/contact"
          },
          "variant": "inline"
        }
      ]
    }
  ]
};
