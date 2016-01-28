goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62815__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62816__i = 0, G__62816__a = new Array(arguments.length -  0);
while (G__62816__i < G__62816__a.length) {G__62816__a[G__62816__i] = arguments[G__62816__i + 0]; ++G__62816__i;}
  args = new cljs.core.IndexedSeq(G__62816__a,0);
} 
return G__62815__delegate.call(this,args);};
G__62815.cljs$lang$maxFixedArity = 0;
G__62815.cljs$lang$applyTo = (function (arglist__62817){
var args = cljs.core.seq(arglist__62817);
return G__62815__delegate(args);
});
G__62815.cljs$core$IFn$_invoke$arity$variadic = G__62815__delegate;
return G__62815;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62818__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62819__i = 0, G__62819__a = new Array(arguments.length -  0);
while (G__62819__i < G__62819__a.length) {G__62819__a[G__62819__i] = arguments[G__62819__i + 0]; ++G__62819__i;}
  args = new cljs.core.IndexedSeq(G__62819__a,0);
} 
return G__62818__delegate.call(this,args);};
G__62818.cljs$lang$maxFixedArity = 0;
G__62818.cljs$lang$applyTo = (function (arglist__62820){
var args = cljs.core.seq(arglist__62820);
return G__62818__delegate(args);
});
G__62818.cljs$core$IFn$_invoke$arity$variadic = G__62818__delegate;
return G__62818;
})()
;

return null;
});
