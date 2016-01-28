goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78133__i = 0, G__78133__a = new Array(arguments.length -  0);
while (G__78133__i < G__78133__a.length) {G__78133__a[G__78133__i] = arguments[G__78133__i + 0]; ++G__78133__i;}
  args = new cljs.core.IndexedSeq(G__78133__a,0);
} 
return G__78132__delegate.call(this,args);};
G__78132.cljs$lang$maxFixedArity = 0;
G__78132.cljs$lang$applyTo = (function (arglist__78134){
var args = cljs.core.seq(arglist__78134);
return G__78132__delegate(args);
});
G__78132.cljs$core$IFn$_invoke$arity$variadic = G__78132__delegate;
return G__78132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78136__i = 0, G__78136__a = new Array(arguments.length -  0);
while (G__78136__i < G__78136__a.length) {G__78136__a[G__78136__i] = arguments[G__78136__i + 0]; ++G__78136__i;}
  args = new cljs.core.IndexedSeq(G__78136__a,0);
} 
return G__78135__delegate.call(this,args);};
G__78135.cljs$lang$maxFixedArity = 0;
G__78135.cljs$lang$applyTo = (function (arglist__78137){
var args = cljs.core.seq(arglist__78137);
return G__78135__delegate(args);
});
G__78135.cljs$core$IFn$_invoke$arity$variadic = G__78135__delegate;
return G__78135;
})()
;

return null;
});
