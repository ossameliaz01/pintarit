<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DictionarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Dictionary::insert([
            ['term' => 'IP Address', 'definition' => 'Identitas numerik yang diberikan ke setiap perangkat yang terhubung ke jaringan yang menggunakan Protokol Internet.'],
            ['term' => 'Subnet Mask', 'definition' => 'Angka 32-bit yang menutupi IP address dan membagi IP address ke jaringan (Network ID) dan perangkat (Host ID).'],
            ['term' => 'IPv4', 'definition' => 'Versi keempat dari Protokol Internet, menggunakan alamat 32-bit.'],
            ['term' => 'IPv6', 'definition' => 'Versi terbaru dari Protokol Internet, menggunakan alamat 128-bit karena IPv4 mulai habis.'],
            ['term' => 'Router', 'definition' => 'Perangkat jaringan yang meneruskan paket data antar jaringan komputer.'],
        ]);
    }
}
