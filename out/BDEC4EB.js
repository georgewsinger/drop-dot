goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18244__i = 0, G__18244__a = new Array(arguments.length -  0);
while (G__18244__i < G__18244__a.length) {G__18244__a[G__18244__i] = arguments[G__18244__i + 0]; ++G__18244__i;}
  args = new cljs.core.IndexedSeq(G__18244__a,0);
} 
return G__18243__delegate.call(this,args);};
G__18243.cljs$lang$maxFixedArity = 0;
G__18243.cljs$lang$applyTo = (function (arglist__18245){
var args = cljs.core.seq(arglist__18245);
return G__18243__delegate(args);
});
G__18243.cljs$core$IFn$_invoke$arity$variadic = G__18243__delegate;
return G__18243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18247__i = 0, G__18247__a = new Array(arguments.length -  0);
while (G__18247__i < G__18247__a.length) {G__18247__a[G__18247__i] = arguments[G__18247__i + 0]; ++G__18247__i;}
  args = new cljs.core.IndexedSeq(G__18247__a,0);
} 
return G__18246__delegate.call(this,args);};
G__18246.cljs$lang$maxFixedArity = 0;
G__18246.cljs$lang$applyTo = (function (arglist__18248){
var args = cljs.core.seq(arglist__18248);
return G__18246__delegate(args);
});
G__18246.cljs$core$IFn$_invoke$arity$variadic = G__18246__delegate;
return G__18246;
})()
;

return null;
});
