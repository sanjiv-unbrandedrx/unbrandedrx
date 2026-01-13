# Claude Code Configuration

## Git Commit Guidelines

**IMPORTANT:** Do not mention Claude or include Co-Authored-By lines in git commit messages.

When creating commits:
- Write commit messages as if they were written by a human developer
- Do NOT add "Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
- Do NOT mention Claude, AI, or automated assistance in commit messages
- Focus on clear, concise descriptions of what changed and why

Example of correct commit message:
```
feat: Update legal documents for SMS compliance

Updates Terms of Service and Privacy Policy with comprehensive SMS
messaging terms to meet TCPA, CTIA, and carrier compliance requirements.
```

Example of incorrect commit message (DO NOT DO THIS):
```
feat: Update legal documents for SMS compliance

... [commit message] ...

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

## Git Ignore

Claude Code temporary files are ignored via .gitignore:
- `.claude/` directory
- `tmpclaude-*` temporary files
