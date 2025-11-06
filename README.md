# Yazılım Gerçekleşme ve Test Dersi - BDD Ödevi (Frontend Test Otomasyonu)

Bu proje, **"Yazılım Gerçekleşme ve Test"** dersi kapsamında **BDD (Davranış Odaklı Geliştirme)** prensiplerini uygulamak için geliştirilmiş bir **Cypress (Frontend Test Otomasyonu)** uygulamasıdır.

Bu test otomasyonu, Ruby on Rails tabanlı **Blog API** sisteminin `/api/v1/users` uç noktasını (endpoint) test etmekte ve API’nin döndürdüğü kullanıcı listesinin doğru formatta olup olmadığını doğrulamaktadır.

---

## Kullanılan Döngü: Red-Green-Refactor

Bu haftaki senaryo (**list_users.feature**) için, BDD’nin "Red-Green" döngüsü kullanılarak geliştirme yapılmıştır:

1. **RED:** Önce özellik için Cucumber formatında bir test senaryosu yazılmıştır. Cypress testi çalıştırıldığında, API yanıtı bulunamadığı için testin **başarısız** olduğu görülmüştür. (`%100 FAIL`)
2. **GREEN:** Daha sonra gerekli API bağlantısı sağlanmış, `/api/v1/users` uç noktasına istek atılmış ve doğru kullanıcı verileri dönerek testin **başarılı** olduğu gözlemlenmiştir. (`%100 SUCCESS`)

---

## Kullanılan Teknolojiler

- Cypress  
- BDD (Cucumber)  
- JavaScript  
- Node.js  
- API Test Otomasyonu

---

## Test Senaryosu Özeti

**Feature:** List users  
**Amaç:** Blog API üzerindeki kullanıcı listesini çekmek ve her kullanıcının gerekli alanlara sahip olduğunu doğrulamak.  

**Senaryo:**
1. Blog API’nin çalıştığı varsayılır.  
2. `/api/v1/users` endpoint’ine GET isteği atılır.  
3. Dönen yanıtın başarılı olduğu (HTTP 200) doğrulanır.  
4. Dönen her kullanıcının `id`, `name` (veya `username`) gibi zorunlu alanlara sahip olduğu kontrol edilir.  

Testler, **Cypress + Cucumber (Gherkin)** yapısı kullanılarak **Davranış Odaklı Geliştirme (BDD)** yaklaşımına uygun şekilde yazılmıştır.

---

## Etik Bildirimi (Zorunlu)

Bu proje, **Samsun Üniversitesi Yazılım Mühendisliği Bölümü "Yazılım Gerçekleşme ve Test" dersi** kapsamında  
**Nurettin Şenyer** ve **Ömer Durmuş** rehberliğinde yapılmıştır.
