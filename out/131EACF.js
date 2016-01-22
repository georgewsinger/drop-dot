goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18108__i = 0, G__18108__a = new Array(arguments.length -  0);
while (G__18108__i < G__18108__a.length) {G__18108__a[G__18108__i] = arguments[G__18108__i + 0]; ++G__18108__i;}
  args = new cljs.core.IndexedSeq(G__18108__a,0);
} 
return G__18107__delegate.call(this,args);};
G__18107.cljs$lang$maxFixedArity = 0;
G__18107.cljs$lang$applyTo = (function (arglist__18109){
var args = cljs.core.seq(arglist__18109);
return G__18107__delegate(args);
});
G__18107.cljs$core$IFn$_invoke$arity$variadic = G__18107__delegate;
return G__18107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18111__i = 0, G__18111__a = new Array(arguments.length -  0);
while (G__18111__i < G__18111__a.length) {G__18111__a[G__18111__i] = arguments[G__18111__i + 0]; ++G__18111__i;}
  args = new cljs.core.IndexedSeq(G__18111__a,0);
} 
return G__18110__delegate.call(this,args);};
G__18110.cljs$lang$maxFixedArity = 0;
G__18110.cljs$lang$applyTo = (function (arglist__18112){
var args = cljs.core.seq(arglist__18112);
return G__18110__delegate(args);
});
G__18110.cljs$core$IFn$_invoke$arity$variadic = G__18110__delegate;
return G__18110;
})()
;

return null;
});
