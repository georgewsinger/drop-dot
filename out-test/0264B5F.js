goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52690__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52691__i = 0, G__52691__a = new Array(arguments.length -  0);
while (G__52691__i < G__52691__a.length) {G__52691__a[G__52691__i] = arguments[G__52691__i + 0]; ++G__52691__i;}
  args = new cljs.core.IndexedSeq(G__52691__a,0);
} 
return G__52690__delegate.call(this,args);};
G__52690.cljs$lang$maxFixedArity = 0;
G__52690.cljs$lang$applyTo = (function (arglist__52692){
var args = cljs.core.seq(arglist__52692);
return G__52690__delegate(args);
});
G__52690.cljs$core$IFn$_invoke$arity$variadic = G__52690__delegate;
return G__52690;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52693__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52694__i = 0, G__52694__a = new Array(arguments.length -  0);
while (G__52694__i < G__52694__a.length) {G__52694__a[G__52694__i] = arguments[G__52694__i + 0]; ++G__52694__i;}
  args = new cljs.core.IndexedSeq(G__52694__a,0);
} 
return G__52693__delegate.call(this,args);};
G__52693.cljs$lang$maxFixedArity = 0;
G__52693.cljs$lang$applyTo = (function (arglist__52695){
var args = cljs.core.seq(arglist__52695);
return G__52693__delegate(args);
});
G__52693.cljs$core$IFn$_invoke$arity$variadic = G__52693__delegate;
return G__52693;
})()
;

return null;
});
