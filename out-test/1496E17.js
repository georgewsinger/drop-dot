goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18739__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18740__i = 0, G__18740__a = new Array(arguments.length -  0);
while (G__18740__i < G__18740__a.length) {G__18740__a[G__18740__i] = arguments[G__18740__i + 0]; ++G__18740__i;}
  args = new cljs.core.IndexedSeq(G__18740__a,0);
} 
return G__18739__delegate.call(this,args);};
G__18739.cljs$lang$maxFixedArity = 0;
G__18739.cljs$lang$applyTo = (function (arglist__18741){
var args = cljs.core.seq(arglist__18741);
return G__18739__delegate(args);
});
G__18739.cljs$core$IFn$_invoke$arity$variadic = G__18739__delegate;
return G__18739;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18742__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18743__i = 0, G__18743__a = new Array(arguments.length -  0);
while (G__18743__i < G__18743__a.length) {G__18743__a[G__18743__i] = arguments[G__18743__i + 0]; ++G__18743__i;}
  args = new cljs.core.IndexedSeq(G__18743__a,0);
} 
return G__18742__delegate.call(this,args);};
G__18742.cljs$lang$maxFixedArity = 0;
G__18742.cljs$lang$applyTo = (function (arglist__18744){
var args = cljs.core.seq(arglist__18744);
return G__18742__delegate(args);
});
G__18742.cljs$core$IFn$_invoke$arity$variadic = G__18742__delegate;
return G__18742;
})()
;

return null;
});
