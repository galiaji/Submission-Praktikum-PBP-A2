<html>
    <head>
        <title> Latihan </title>
    </head>
    <body>
        <?php
        // Fungsi untuk menghitung nilai rata-rata dari array
        function hitung_rata($array) {
            if (count($array) > 0) {
                return array_sum($array) / count($array);
            } else {
                return 0;
            }
        }
        
        // Fungsi untuk menampilkan data mahasiswa dalam tabel
        function print_mhs($array_mhs) {
            echo "<table border='1'>
                    <tr>
                        <th>Nama</th>
                        <th>Nilai 1</th>
                        <th>Nilai 2</th>
                        <th>Nilai 3</th>
                        <th>Rata2</th>
                    </tr>";
        
            foreach ($array_mhs as $nama => $nilai) {
                echo "<tr>";
                echo "<td>$nama</td>";
                echo "<td>{$nilai[0]}</td>";
                echo "<td>{$nilai[1]}</td>";
                echo "<td>{$nilai[2]}</td>";
        
                // Hitung rata-rata nilai dan tampilkan
                $rata_rata = hitung_rata($nilai);
                echo "<td>$rata_rata</td>";
        
                echo "</tr>";
            }
        
            echo "</table>";
        }
        
        // Array data mahasiswa
        $array_mhs = array('Abdul' => array(89,90,54),
                            'Budi' => array(98,65,74),
                            'Nina' => array(67,56,84),
                            'Andi' => array(87,69,50),
                            'Juli' => array(98,65,74)
                );
        // Panggil fungsi print_mhs untuk menampilkan data mahasiswa dalam tabel
        print_mhs($array_mhs);        
        ?>
    </body>
</html>