Untuk Body yang digunakan untuk inputan berupa

-Pegawai
1. nama
2. posisi
3. provinsi
4. kecamatan
5. kota
6. alamat

-Absensi
1.id_pegawai
2.tanggal (YYYY-MM-DD)
3.keterangan (Hadir, Cuti, Tidak Hadir)


-Create, Read menggunakan
1. Absensi : http://localhost:8081/api/absensi
2. Pegawai : http://localhost:8081/api/pegawai

-Update dan Delete menggunakan http://localhost:8081/api/absensi/{id}
-Read Data Satuan menggunakan http://localhost:8081/api/absensi/detail/{id}
-Melihat Laporan menggunakan http://localhost:8081/api/absensi/laporan
