(function($) {
    $.fn.yatfh = function() {
        if (this.hasClass('table-bordered')) {
            this.removeClass('table-bordered');
        }

        this.wrap('<div class="yatfh"><div class="yatfh-inner"></div></div>');
        this.find('thead th').each(function() {
            var $this = $(this);
            var html = '<div class="yatfh-th-for-width-constraint">' + $this.html() + '</div>';
                html += '<div class="yatfh-th-displayed">' + $this.html() + '</div>';
            $this.html(html);
        });

        return this;
    };
} (jQuery));
