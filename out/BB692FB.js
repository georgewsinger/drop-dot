goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__292321__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__292321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292322__i = 0, G__292322__a = new Array(arguments.length -  0);
while (G__292322__i < G__292322__a.length) {G__292322__a[G__292322__i] = arguments[G__292322__i + 0]; ++G__292322__i;}
  args = new cljs.core.IndexedSeq(G__292322__a,0);
} 
return G__292321__delegate.call(this,args);};
G__292321.cljs$lang$maxFixedArity = 0;
G__292321.cljs$lang$applyTo = (function (arglist__292323){
var args = cljs.core.seq(arglist__292323);
return G__292321__delegate(args);
});
G__292321.cljs$core$IFn$_invoke$arity$variadic = G__292321__delegate;
return G__292321;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__292324__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__292324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__292325__i = 0, G__292325__a = new Array(arguments.length -  0);
while (G__292325__i < G__292325__a.length) {G__292325__a[G__292325__i] = arguments[G__292325__i + 0]; ++G__292325__i;}
  args = new cljs.core.IndexedSeq(G__292325__a,0);
} 
return G__292324__delegate.call(this,args);};
G__292324.cljs$lang$maxFixedArity = 0;
G__292324.cljs$lang$applyTo = (function (arglist__292326){
var args = cljs.core.seq(arglist__292326);
return G__292324__delegate(args);
});
G__292324.cljs$core$IFn$_invoke$arity$variadic = G__292324__delegate;
return G__292324;
})()
;

return null;
});
