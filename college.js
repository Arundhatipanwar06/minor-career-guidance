var colleges = [
    " Indian Institutes of Technology (IITs),Engineering",
 "National Institutes of Technology (NITs),Engineering",
 "Birla Institute of Technology and Science (BITS Pilani),Engineering",
 "Indian Institute of Information Technology (IIITs),Engineering",
 "Delhi Technological University (DTU),Engineering",
 "Vellore Institute of Technology (VIT),Engineering",
 "International Institute of Information Technology, Hyderabad (IIIT Hyderabad),Engineering",
 "Indian School of Mines (ISM), Dhanbad,Engineering",
 "Manipal Institute of Technology (MIT),Engineering",
 "College of Engineering, Pune (COEP),Engineering",
 "SRM Institute of Science and Technology, Chennai,Engineering",
 "Thapar Institute of Engineering and Technology, Patiala,Engineering",
 "PSG College of Technology, Coimbatore,Engineering",
 "PES University, Bangalore,Engineering",
 "Manipal University, Manipal,Engineering",
 "Amity University, Noida,Engineering",
 "Veermata Jijabai Technological Institute (VJTI), Mumbai,Engineering",
 "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat,Engineering",
 "National Institute of Technology, Rourkela (NIT Rourkela),Engineering",
 "Dr. B. R. Ambedkar National Institute of Technology (NIT Jalandhar),Engineering",
 "All India Institute of Medical Sciences (AIIMS), New Delhi",
 "Christian Medical College (CMC), Vellore",
 "Armed Forces Medical College (AFMC), Pune",
 "Maulana Azad Medical College (MAMC), New Delhi",
 "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
 "JIPMER, Puducherry",
 "Kasturba Medical College (KMC), Manipal",
 "Grant Medical College (GMC), Mumbai",
 "Seth GS Medical College (SGSMC), Mumbai",
 "King George's Medical University (KGMU), Lucknow",
 "Jawaharlal Nehru Medical College (JNMC), Belgaum",
 "St. John's Medical College, Bangalore",
 "Madras Medical College (MMC), Chennai",
 "Bangalore Medical College and Research Institute (BMCRI), Bangalore",
 "Institute of Medical Sciences, Banaras Hindu University (IMS-BHU), Varanasi",
 "Osmania Medical College (OMC), Hyderabad",
 "Lady Hardinge Medical College (LHMC), New Delhi",
 "Government Medical College and Hospital (GMCH), Chandigarh",
 "Stanley Medical College (SMC), Chennai",
 "Patna Medical College (PMC), Patna",
 "National Institute of Design (NID), Ahmedabad,Art",
 "Sir J.J. School of Art, Mumbai",
 "College of Art, Delhi University, New Delhi",
 "Faculty of Fine Arts, MS University, Baroda",
 "Shantiniketan College of Fine Arts, Visva-Bharati University, West Bengal",
 "Rachana Sansad College of Applied Art and Craft, Mumbai",
 "Government College of Art and Craft, Kolkata",
 "Srishti Institute of Art, Design and Technology, Bangalore",
 "Banaras Hindu University (BHU) - Faculty of Visual Arts, Varanasi",
 "Karnataka Chitrakala Parishath, Bangalore,Arts",
 "Indian Institutes of Management (IIMs),Commerce",
 "Indian School of Business (ISB), Hyderabad,Commerce",
 "XLRI - Xavier School of Management, Jamshedpur,Commerce",
 "Faculty of Management Studies (FMS), Delhi University, New Delhi,Commerce",
 "S.P. Jain Institute of Management and Research (SPJIMR), Mumbai,Commerce",
 "Indian Institute of Foreign Trade (IIFT), New Delhi,Commerce",
 "Management Development Institute (MDI), Gurgaon,Commerce",
 "Narsee Monjee Institute of Management Studies (NMIMS), Mumbai,Commerce",
 "Shailesh J. Mehta School of Management (SJMSOM), IIT Bombay,Commerce",
 "Institute of Management Technology (IMT), Ghaziabad,Commerce",
 ];
 
 function searchColleges(searchTerm) {
     var searchResultsDiv = document.getElementById("searchResults");
     searchResultsDiv.innerHTML = "";
 
     // Filter colleges based on search term
     var filteredColleges = colleges.filter(function(college) {
         return college.toLowerCase().includes(searchTerm.toLowerCase());
     });
 
     // Display filtered colleges
     filteredColleges.forEach(function(college) {
         var resultItem = document.createElement("div");
         resultItem.textContent = college;
         resultItem.classList.add("resultItem");
         resultItem.onclick = function() {
             document.getElementById("searchInput").value = college;
             searchResultsDiv.innerHTML = "";
         };
         searchResultsDiv.appendChild(resultItem);
        });
     }