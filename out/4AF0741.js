goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57757__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57757 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57758__i = 0, G__57758__a = new Array(arguments.length -  0);
while (G__57758__i < G__57758__a.length) {G__57758__a[G__57758__i] = arguments[G__57758__i + 0]; ++G__57758__i;}
  args = new cljs.core.IndexedSeq(G__57758__a,0);
} 
return G__57757__delegate.call(this,args);};
G__57757.cljs$lang$maxFixedArity = 0;
G__57757.cljs$lang$applyTo = (function (arglist__57759){
var args = cljs.core.seq(arglist__57759);
return G__57757__delegate(args);
});
G__57757.cljs$core$IFn$_invoke$arity$variadic = G__57757__delegate;
return G__57757;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57760__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57761__i = 0, G__57761__a = new Array(arguments.length -  0);
while (G__57761__i < G__57761__a.length) {G__57761__a[G__57761__i] = arguments[G__57761__i + 0]; ++G__57761__i;}
  args = new cljs.core.IndexedSeq(G__57761__a,0);
} 
return G__57760__delegate.call(this,args);};
G__57760.cljs$lang$maxFixedArity = 0;
G__57760.cljs$lang$applyTo = (function (arglist__57762){
var args = cljs.core.seq(arglist__57762);
return G__57760__delegate(args);
});
G__57760.cljs$core$IFn$_invoke$arity$variadic = G__57760__delegate;
return G__57760;
})()
;

return null;
});
