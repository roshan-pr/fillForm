#! /bin/bash

function areEqual (){
  local actual=${1}
  local expected=${2}

  echo ${actual} > /tmp/actual.txt
  echo ${expected} > /tmp/expected.txt
  diff /tmp/actual.txt /tmp/expected.txt
}

function case1 (){
  local prompts=$(node src/fillForm.js << EOF
Raghav
1234-56-78
swimming
1234567890
line1
line2
EOF
)

  local actResult=`cat ./responses.json`
  local expResult='{"name":"Raghav","dob":"1234-56-78","hobbies":["swimming"],"ph-number":"1234567890","address":"line1\nline2"}'

  areEqual "${actResult}" "${expResult}"

  local expPrompt="Please enter name Please enter dob Please enter hobbies Please enter ph number Please enter address line 1 Please enter address line 2 Thanks"
  areEqual "${prompts}" "${expPrompt}"
}

case1 
