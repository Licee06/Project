#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
    // Menginisialisasi generator bilangan acak dengan waktu saat ini
    std::srand(static_cast<unsigned int>(std::time(nullptr)));

    int maksimum = 100; // Batas atas untuk angka yang harus ditebak
    int angkaTebakan = std::rand() % maksimum + 1; // Menghasilkan angka acak antara 1 dan maksimum
    int tebakan;
    int percobaan = 0;

    std::cout << "Selamat datang di Permainan Tebak Angka!" << std::endl;
    std::cout << "Saya sudah memilih sebuah angka antara 1 dan " << maksimum << ". Coba tebak!" << std::endl;

    do {
        std::cout << "Masukkan tebakan Anda: ";
        std::cin >> tebakan;

        percobaan++;

        if (tebakan < angkaTebakan) {
            std::cout << "Tebakan terlalu rendah. Cobalah lagi." << std::endl;
        } else if (tebakan > angkaTebakan) {
            std::cout << "Tebakan terlalu tinggi. Cobalah lagi." << std::endl;
        } else {
            std::cout << "Selamat! Anda berhasil menebak angka (" << angkaTebakan << ") dalam " << percobaan << " percobaan." << std::endl;
        }
    } while (tebakan != angkaTebakan);

    return 0;
}
