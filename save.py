# save.py
import os
from pathlib import Path

# --- Config ---
# Directories we never want to descend into
EXCLUDED_DIRS = {
    ".git", "node_modules", ".next", "dist", "build", "out",
    "__pycache__", ".pytest_cache", ".cache", ".turbo", ".parcel-cache",
    ".venv", "venv", ".idea", ".vscode", "target", "bin", "obj",
    ".gradle", ".terraform", ".svn", ".hg",
    "data",
    "public",  # ADDED: Exclude static assets folder
}

# Text/code file extensions to include
INCLUDE_EXTS = {
    ".py", ".js", ".jsx", ".ts", ".tsx", ".mjs", ".cjs",
    ".json", ".yml", ".yaml", ".toml", ".ini", ".env",
    ".md", ".txt", ".csv", ".tsv",
    ".html", ".css", ".scss", ".sass", ".less",
    ".svg", ".xml", ".map", ".sql", ".sh", ".bat", ".ps1",
    ".c", ".h", ".hpp", ".cpp", ".rs", ".go", ".java", ".kt",
}

# Specific filenames to include (if they don't have a common extension)
INCLUDE_FILENAMES = {
    "Dockerfile", "Makefile", ".gitignore", ".gitattributes", "Procfile", "LICENSE", "LICENSE.txt", "README", "README.md",
}

# Files to exclude explicitly
EXCLUDED_FILES = {
    "save.py",           # ignore this script itself
    "saved_code.txt",    # ADDED: ignore the output file
    
    # Lock files
    "package.json",
    "package-lock.json",
    "pnpm-lock.yaml",    # ADDED
    "yarn.lock",         # ADDED
    
    # Auto-generated config
    "next-env.d.ts",     # ADDED
}


def iter_code_files(root: Path):
    root = root.resolve()
    for dirpath, dirnames, filenames in os.walk(root):
        # Prune directories in-place so os.walk won't descend into them
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]

        for name in filenames:
            p = Path(dirpath) / name
            rel_name = p.name

            if rel_name in EXCLUDED_FILES:
                continue

            # Include by extension or by explicit filename allowlist
            if (p.suffix.lower() in INCLUDE_EXTS) or (rel_name in INCLUDE_FILENAMES):
                yield p


def save_code_files(output_file_path: Path):
    project_root = Path(__file__).resolve().parent
    files = sorted({f.resolve() for f in iter_code_files(project_root)})
    kept, skipped = 0, 0

    with output_file_path.open("w", encoding="utf-8") as out:
        for f in files:
            try:
                # Read as text; replace undecodable bytes just in case
                content = f.read_text(encoding="utf-8", errors="replace")
                rel = f.relative_to(project_root)
                out.write(f"\n# File: {rel}\n{content}\n")
                kept += 1
            except Exception as e:
                # If something weird still sneaks through, skip it
                print(f"Skipping {f}: {e}")
                skipped += 1

    print(f"Saved {kept} files to {output_file_path} (skipped {skipped}).")


if __name__ == "__main__":
    project_directory = Path(__file__).resolve().parent
    os.chdir(project_directory)

    output_file = project_directory / "saved_code.txt"
    save_code_files(output_file)