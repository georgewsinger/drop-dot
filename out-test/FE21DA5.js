goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28133__i = 0, G__28133__a = new Array(arguments.length -  0);
while (G__28133__i < G__28133__a.length) {G__28133__a[G__28133__i] = arguments[G__28133__i + 0]; ++G__28133__i;}
  args = new cljs.core.IndexedSeq(G__28133__a,0);
} 
return G__28132__delegate.call(this,args);};
G__28132.cljs$lang$maxFixedArity = 0;
G__28132.cljs$lang$applyTo = (function (arglist__28134){
var args = cljs.core.seq(arglist__28134);
return G__28132__delegate(args);
});
G__28132.cljs$core$IFn$_invoke$arity$variadic = G__28132__delegate;
return G__28132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28136__i = 0, G__28136__a = new Array(arguments.length -  0);
while (G__28136__i < G__28136__a.length) {G__28136__a[G__28136__i] = arguments[G__28136__i + 0]; ++G__28136__i;}
  args = new cljs.core.IndexedSeq(G__28136__a,0);
} 
return G__28135__delegate.call(this,args);};
G__28135.cljs$lang$maxFixedArity = 0;
G__28135.cljs$lang$applyTo = (function (arglist__28137){
var args = cljs.core.seq(arglist__28137);
return G__28135__delegate(args);
});
G__28135.cljs$core$IFn$_invoke$arity$variadic = G__28135__delegate;
return G__28135;
})()
;

return null;
});
