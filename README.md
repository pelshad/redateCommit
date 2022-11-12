# 깃허브 잔디 날짜 변경

가능하면 쓸 일 없길 바람...

## 1. git log

$ git log

(가장 최근 커밋의 날짜를 수정할 거면 2로 바로 진행)
커밋 중 원하는 커밋의 날짜를 수정한다면 commit t의 hash value 복사

## 1-2. git rebase -i {hash value}

ex) git rebase -i 83f94b07a663bcaf5ddd355f92830fe4d9
맨 윗 줄의 pick을 edit로 수정


## 2. git commit amend

$ git commit --amend --no-edit --date "원하는 날짜"

수정하고 싶은 날짜의 월, 일, 시간을 입력
ex) $ git commit --amend --no-edit --date "May 29 08:00:00 2021 +0000"


## 3. Git rebase --continue

$ git rebase --continue

fatal: No rebase in progress?
라는 글이 나오는데 무시해도 됨

## 4. git push -f origin main

$git push -f origin main

끝!
