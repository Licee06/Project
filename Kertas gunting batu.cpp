#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    // Menginisialisasi generator bilangan acak dengan waktu saat ini
    std::srand(static_cast<unsigned int>(std::time(nullptr)));

    int pemainSkor = 0;
    int komputerSkor = 0;
    int jumlahRonde;

    std::cout << "Selamat datang di Permainan Batu-Gunting-Kertas!" << std::endl;
    std::cout << "Berapa banyak ronde yang ingin Anda mainkan? ";
    std::cin >> jumlahRonde;

    // Loop utama yang mengontrol jumlah ronde
    for (int ronde = 1; ronde <= jumlahRonde; ++ronde) {
        int pemainPilihan, komputerPilihan;

        // Meminta pemain untuk memilih (0 untuk batu, 1 untuk gunting, 2 untuk kertas)
        std::cout << "\nRonde " << ronde << ": Pilih (0 untuk Batu, 1 untuk Gunting, 2 untuk Kertas): ";
        std::cin >> pemainPilihan;

        // Menghasilkan pilihan acak untuk komputer (0 untuk batu, 1 untuk gunting, 2 untuk kertas)
        komputerPilihan = std::rand() % 3;

        // Menampilkan pilihan pemain dan komputer
        std::cout << "Pemain memilih: ";
        switch (pemainPilihan) {
            case 0:
                std::cout << "Batu";
                break;
            case 1:
                std::cout << "Gunting";
                break;
            case 2:
                std::cout << "Kertas";
                break;
            default:
                std::cout << "Pilihan tidak valid";
                break;
        }
        std::cout << std::endl;

        std::cout << "Komputer memilih: ";
        switch (komputerPilihan) {
            case 0:
                std::cout << "Batu";
                break;
            case 1:
                std::cout << "Gunting";
                break;
            case 2:
                std::cout << "Kertas";
                break;
        }
        std::cout << std::endl;

        // Menentukan pemenang untuk ronde ini
        if (pemainPilihan == komputerPilihan) {
            std::cout << "Hasil: Seri!" << std::endl;
        } else if ((pemainPilihan == 0 && komputerPilihan == 1) || (pemainPilihan == 1 && komputerPilihan == 2) || (pemainPilihan == 2 && komputerPilihan == 0)) {
            std::cout << "Hasil: Pemain menang!" << std::endl;
            pemainSkor++;
        } else {
            std::cout << "Hasil: Komputer menang!" << std::endl;
            komputerSkor++;
        }
    }

    // Menampilkan skor akhir
    std::cout << "\nSkor Akhir:" << std::endl;
    std::cout << "Pemain: " << pemainSkor << " poin" << std::endl;
    std::cout << "Komputer: " << komputerSkor << " poin" << std::endl;

    // Menampilkan pemenang atau hasil seri
    if (pemainSkor > komputerSkor) {
        std::cout << "Pemain menang!" << std::endl;
    } else if (pemainSkor < komputerSkor) {
        std::cout << "Komputer menang!" << std::endl;
    } else {
        std::cout << "Permainan berakhir seri!" << std::endl;
    }

    return 0;
}

