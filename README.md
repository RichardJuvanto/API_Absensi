Untuk Body yang digunakan untuk inputan berupa

-Pegawai
1. nama
2. posisi
3. provinsi
4. kecamatan
5. kota
6. alamat

-Absensi

1. id_pegawai
2. tanggal (YYYY-MM-DD)
3. keterangan (Hadir, Cuti, Tidak Hadir)

-Create, Read menggunakan

1. Absensi : http://localhost:8081/api/absensi
2. Pegawai : http://localhost:8081/api/pegawai

-Update dan Delete menggunakan 

1. Absensi : http://localhost:8081/api/absensi/{id}
2. Pegawai : http://localhost:8081/api/pegawai/{id}


-Read Data Satuan menggunakan 

1. Absensi : http://localhost:8081/api/absensi/detail/{id}
2. Pegawai : http://localhost:8081/api/pegawai/{id}

-Melihat Laporan menggunakan 
1. Keseluruhan : http://localhost:8081/api/absensi/laporan
2. Tgl 01-09-2021 - 24-09-2021 : http://localhost:8081/api/absensi/laporan?tanggalawal=2021-09-01&tanggalakhir=2021-09-24
3. Tgl 01-09-2021 - 24-09-2021 & keterangan : Hadir : https://localhost:8081/api/absensi/laporan?tanggalawal=2021-09-01&tanggalakhir=2021-09-31&keterangan=Hadir
4. Tgl 01-09-2021 - 24-09-2021 & keterangan : Hadir & Tidak Hadir : http:/localhost:8081/api/absensi/laporan?tanggalawal=2021-09-01&tanggalakhir=2021-09-31&keterangan=Tidak Hadir&keterangan=Hadir

PS : Laporan hanya dapat menggunakan menggunakan tanggal dan perlu 'tanggalawal' dan 'tanggalakhir'
