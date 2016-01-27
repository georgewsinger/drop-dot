goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78899__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78900__i = 0, G__78900__a = new Array(arguments.length -  0);
while (G__78900__i < G__78900__a.length) {G__78900__a[G__78900__i] = arguments[G__78900__i + 0]; ++G__78900__i;}
  args = new cljs.core.IndexedSeq(G__78900__a,0);
} 
return G__78899__delegate.call(this,args);};
G__78899.cljs$lang$maxFixedArity = 0;
G__78899.cljs$lang$applyTo = (function (arglist__78901){
var args = cljs.core.seq(arglist__78901);
return G__78899__delegate(args);
});
G__78899.cljs$core$IFn$_invoke$arity$variadic = G__78899__delegate;
return G__78899;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78902__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78903__i = 0, G__78903__a = new Array(arguments.length -  0);
while (G__78903__i < G__78903__a.length) {G__78903__a[G__78903__i] = arguments[G__78903__i + 0]; ++G__78903__i;}
  args = new cljs.core.IndexedSeq(G__78903__a,0);
} 
return G__78902__delegate.call(this,args);};
G__78902.cljs$lang$maxFixedArity = 0;
G__78902.cljs$lang$applyTo = (function (arglist__78904){
var args = cljs.core.seq(arglist__78904);
return G__78902__delegate(args);
});
G__78902.cljs$core$IFn$_invoke$arity$variadic = G__78902__delegate;
return G__78902;
})()
;

return null;
});
