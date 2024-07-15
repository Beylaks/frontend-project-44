install:
	npm li
brain-games:
	node bin/brain-games.js
make lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
publish:
	npm publish --dry-run