#! /bin/bash
# Proyek Shell Scripting
echo "Menampilkan ukuran memory pada sistem dalam satuan megabytes"
# -m untuk menunjukan dalam megabytes, -t untuk menunjukan total
free -m -t
sleep 3
echo ""
echo "Menampilkan penggunaan ruang disk pada filesystem dalam satuan gigabytes"
# -h untuk menunjukan dengan format yang mudah dibaca, -BG untuk menunjukan dalam gigabytes
df -h -BG
sleep 3
echo ""
echo "Menampilkan penggunaan ruang disk pada filesystem hanya untuk kolom Filesystem dan Use% dan tanpa tmpfs"
# --output=source,pcent untuk hanya menampilkan filesystem dan use%, -x tmpfs untuk menghilangkan tmpfs
df -h -BG --output=source,pcent -x tmpfs
sleep 1m