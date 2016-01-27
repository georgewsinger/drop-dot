goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62349__i = 0, G__62349__a = new Array(arguments.length -  0);
while (G__62349__i < G__62349__a.length) {G__62349__a[G__62349__i] = arguments[G__62349__i + 0]; ++G__62349__i;}
  args = new cljs.core.IndexedSeq(G__62349__a,0);
} 
return G__62348__delegate.call(this,args);};
G__62348.cljs$lang$maxFixedArity = 0;
G__62348.cljs$lang$applyTo = (function (arglist__62350){
var args = cljs.core.seq(arglist__62350);
return G__62348__delegate(args);
});
G__62348.cljs$core$IFn$_invoke$arity$variadic = G__62348__delegate;
return G__62348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62352__i = 0, G__62352__a = new Array(arguments.length -  0);
while (G__62352__i < G__62352__a.length) {G__62352__a[G__62352__i] = arguments[G__62352__i + 0]; ++G__62352__i;}
  args = new cljs.core.IndexedSeq(G__62352__a,0);
} 
return G__62351__delegate.call(this,args);};
G__62351.cljs$lang$maxFixedArity = 0;
G__62351.cljs$lang$applyTo = (function (arglist__62353){
var args = cljs.core.seq(arglist__62353);
return G__62351__delegate(args);
});
G__62351.cljs$core$IFn$_invoke$arity$variadic = G__62351__delegate;
return G__62351;
})()
;

return null;
});
