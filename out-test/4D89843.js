goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59760__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59760 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59761__i = 0, G__59761__a = new Array(arguments.length -  0);
while (G__59761__i < G__59761__a.length) {G__59761__a[G__59761__i] = arguments[G__59761__i + 0]; ++G__59761__i;}
  args = new cljs.core.IndexedSeq(G__59761__a,0);
} 
return G__59760__delegate.call(this,args);};
G__59760.cljs$lang$maxFixedArity = 0;
G__59760.cljs$lang$applyTo = (function (arglist__59762){
var args = cljs.core.seq(arglist__59762);
return G__59760__delegate(args);
});
G__59760.cljs$core$IFn$_invoke$arity$variadic = G__59760__delegate;
return G__59760;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59763__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59763 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59764__i = 0, G__59764__a = new Array(arguments.length -  0);
while (G__59764__i < G__59764__a.length) {G__59764__a[G__59764__i] = arguments[G__59764__i + 0]; ++G__59764__i;}
  args = new cljs.core.IndexedSeq(G__59764__a,0);
} 
return G__59763__delegate.call(this,args);};
G__59763.cljs$lang$maxFixedArity = 0;
G__59763.cljs$lang$applyTo = (function (arglist__59765){
var args = cljs.core.seq(arglist__59765);
return G__59763__delegate(args);
});
G__59763.cljs$core$IFn$_invoke$arity$variadic = G__59763__delegate;
return G__59763;
})()
;

return null;
});
