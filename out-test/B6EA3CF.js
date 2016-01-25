goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11314__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11314 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11315__i = 0, G__11315__a = new Array(arguments.length -  0);
while (G__11315__i < G__11315__a.length) {G__11315__a[G__11315__i] = arguments[G__11315__i + 0]; ++G__11315__i;}
  args = new cljs.core.IndexedSeq(G__11315__a,0);
} 
return G__11314__delegate.call(this,args);};
G__11314.cljs$lang$maxFixedArity = 0;
G__11314.cljs$lang$applyTo = (function (arglist__11316){
var args = cljs.core.seq(arglist__11316);
return G__11314__delegate(args);
});
G__11314.cljs$core$IFn$_invoke$arity$variadic = G__11314__delegate;
return G__11314;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11317__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11318__i = 0, G__11318__a = new Array(arguments.length -  0);
while (G__11318__i < G__11318__a.length) {G__11318__a[G__11318__i] = arguments[G__11318__i + 0]; ++G__11318__i;}
  args = new cljs.core.IndexedSeq(G__11318__a,0);
} 
return G__11317__delegate.call(this,args);};
G__11317.cljs$lang$maxFixedArity = 0;
G__11317.cljs$lang$applyTo = (function (arglist__11319){
var args = cljs.core.seq(arglist__11319);
return G__11317__delegate(args);
});
G__11317.cljs$core$IFn$_invoke$arity$variadic = G__11317__delegate;
return G__11317;
})()
;

return null;
});
