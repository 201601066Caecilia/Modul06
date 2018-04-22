function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Apakah JavaScript bahasa pemrograman paling keren sedunia?',
						 ['Ya', 'Tidak'],
						 '0'); 
	var q2 = new Question('Siapa nama dosen yang mengajar kuliah ini ?',
						 ['John', 'Micheal', 'Oskar'],
						 '2');
	var q3 = new Question('Kata yang paling bagus mendeskripsikan koding',
						 ['Bosan', 'Susah', 'Membahagiakan', 'Membosankan'],
						 '3');
	var q4 = new Question('Apakah kamu sudah makan?',
						 ['Sudah','Belum'],
						 '1');
	var q5 = new Question('Apa mata kuliah paling berat semester ini?',
						 ['Pemrog Web','Skripsi'],
						 '1');
    var q6 = new Question('Besok adalah hari?',
						 ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'],
						 '0');
    var q7 = new Question('Berapa jumlah mantanmu?',
						 ['1','4','6','8'],
						 '1');
    var q8 = new Question('Bagaimana rasanya membuat banyak pertanyaan tugas ini?',
						 ['Susah','Bingung','Mudah'],
						 '1');
    var q9 = new Question('Bagaimana perasaanmu ketika kuliah pagi?',
						 ['Senang','Ngantuk','Bosan','Bahagia Sekali'],
						 '1');
    var q10 = new Question('Berapa umurmu?',
						 ['19','20','21','22'],
						 '3');
    
    
	var questions = [ql, q2, q3, q4, q5, q6, q7, q8, q9, q10];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};