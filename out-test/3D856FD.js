goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12897__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12897 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12898__i = 0, G__12898__a = new Array(arguments.length -  0);
while (G__12898__i < G__12898__a.length) {G__12898__a[G__12898__i] = arguments[G__12898__i + 0]; ++G__12898__i;}
  args = new cljs.core.IndexedSeq(G__12898__a,0);
} 
return G__12897__delegate.call(this,args);};
G__12897.cljs$lang$maxFixedArity = 0;
G__12897.cljs$lang$applyTo = (function (arglist__12899){
var args = cljs.core.seq(arglist__12899);
return G__12897__delegate(args);
});
G__12897.cljs$core$IFn$_invoke$arity$variadic = G__12897__delegate;
return G__12897;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12900__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12900 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12901__i = 0, G__12901__a = new Array(arguments.length -  0);
while (G__12901__i < G__12901__a.length) {G__12901__a[G__12901__i] = arguments[G__12901__i + 0]; ++G__12901__i;}
  args = new cljs.core.IndexedSeq(G__12901__a,0);
} 
return G__12900__delegate.call(this,args);};
G__12900.cljs$lang$maxFixedArity = 0;
G__12900.cljs$lang$applyTo = (function (arglist__12902){
var args = cljs.core.seq(arglist__12902);
return G__12900__delegate(args);
});
G__12900.cljs$core$IFn$_invoke$arity$variadic = G__12900__delegate;
return G__12900;
})()
;

return null;
});
